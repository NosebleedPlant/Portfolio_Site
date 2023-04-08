---
title: "Do You'r Job"
date: 2023-02-25
draft: false
tags: ["GameDev", "Gameplay", "UI"]
video_url: "https://www.youtube.com/embed/Lg8xoecfMLQ"
tools_used: ["Unity", "C#", "Figma", "Illustrator", "Photoshop", "Git"]
cover: "/img/Backgrounds/DoYourJob.png"
cover_pos: "<height>px"
github: "https://github.com/NosebleedPlant/Do-Your-Job"
itch: "https://nosebleedplant.itch.io/do-your-job"
youtube: "https://youtu.be/Lg8xoecfMLQ"
---
---
For this project I wanted to get my hands dirty with shader programming as well as unity’s UI system. Which is why I thought it would be really fun if the UI/UX played a central role in how you interacted with the mechanics of the game. So I went with the idea of making a faux desktop environment where players could play a handful of mini-games.  It was also partly a way to vent the frustration and pressures of the past year of univeristy and COVID. What better way to emulate the feeling of millions of deadlines and unsustainable multitasking then by making an office simulation game.

### Mini Games:

As mentioned earlier, this game consists of a handful of minigames. In this section I breifly go over what those games are.

| Mini-Game   | Description |
| :---        |    :----:   |
| Storage Game  | This one is probably the simplest out of the four. A pretty straight forward clicker game. There are files and folders taking up space so players have to delete them by clicking on them. |
| Security Game | This one is a reaction based spin on the basic clicker game. Players must prevent viruses from infecting the computer by clicking on them while they are in a specified area. |
| Network Game  | The network game is a basic memory game. Players are shown a set of IP addresses and their corresponding ports. Users must then simply connect the IPs to the ports by clicking and dragging. |
| Service Game  | A fun little simulation of angrily tying out polite responses to unreasonable complaints. The player gets an never ending list of complaints that they can respond to by basically mashing the keyboard and it will produce a polite measured response. |

{{< video src="https://user-images.githubusercontent.com/42461443/230720068-92997e4c-ce2a-4ec2-8f40-f4496bd28226.mp4" _width="100" _allign="center">}}

Initally this was supposed to be a game jam project for Itch.io's bi-weekly MiniJam. Unfortunately the friend I was planning on working with had to tap out because of personal circumstance. I myself was not able to give the project as much time as I would have liked because of my responsibilities as a student so I ended up extending the project a bit. In the end it became a my first solo project after a long time of working with teams but it was still pretty fun. Being in full control of everything that goes into a game, though a bit lonely is gratifying in its own way.

# Stuff I learned:
---
This project let me dive into unity's UI system and I was able to learn quite a few things thanks to that. The approach to developing UI that I landed on was creating a bunch of tiny, self contained scripts such as the ClickToBounce script below. These tiny scripts can them be combined to compose more interesting UI elements. 

```C#
public class ClickToBounce : MonoBehaviour
{
    [SerializeField] private float TweenTime;

    public void Pop()
    {
        LeanTween.cancel(transform.gameObject);
        transform.localScale= new Vector3(0.5f,0.5f,0.5f);
        LeanTween.scale(this.gameObject,new Vector3(0.6f,0.6f,0.6f),TweenTime).setEasePunch();
    }
}
```
The other major thing I was able to wrap my head around was incorporating first-class functions into my code. I had been aware about this functionality of C# for a while but I had never really used it before. Over the course of this project I learned how C# delegates,events and actions work as well as when they might be useful.These can be pretty powerful especially when functionality similar to an observer pattern is need but one of the neat things that it also lets clean up my code a bit. For example the following function takes in an action as a parameter and can checks to see if certain conditions are met. In this case that would be the location of an input event. If those conditions are satisfied then the function calls the action with the appropriate parameter. This avoids the need to call these checks then pass the results back and forth before I call the actual functions resulting in much cleaner code in my opinion

```C#
private void GameInputRecived(Action<Vector3> func)
{
    // read the mouse position and clear cached results from previous event
    _mouseEventData.position = Mouse.current.position.ReadValue();
    _click_results.Clear();

    // if the current event has occured within the bounds of a minigame window then call the handler action
    _uiRaycaster.Raycast(_mouseEventData, _click_results);
    if(_click_results.Count>0)
    {
        if (_click_results[0].gameObject.CompareTag("MinigameWindow"))
        {
            Vector3 worldPosition = Camera.main.ScreenToWorldPoint(_mouseEventData.position);
            func(worldPosition);
        }
    }
}
```
Im also fairly happy with how the post processing effect turned out for the fake monitor aesthetic as well as the abbertion that occurs on mistakes. I will likely revist it at some point since I feel theres alot more i can do to imporve it but for now I think it looks good. The effect itself was written using unity's shader graph and involves warping the screen texture using the UVs then applying a few noise masks to get the scan lines effect.

Lastly, another intersting thing I was able to dive deep on was coroutines. I had used them before in Java but in this project I was able to learn how they work in unity. Almost all the games have a timed component to them so I was able to use these to solve a variety of problems such as spawning prefabs over a period of time, calling functions after a delay etc. An example of this is the function that spwans alerts when the network gauge is maxed out: 

```C#
private bool _networkAlerted = false;
private void SpawnNetworkAlert()
{
    if(_gameData.NetworkGameData.MaxReached && _networkAlerted==false)
    {
        _networkAlerted = true;
        Vector3 spawnPosition = new Vector3(UnityEngine.Random.Range(-257,257),
                                            UnityEngine.Random.Range(-190,190),
                                            0.137251f);
        Transform popup = Instantiate(NetworkAlertPrefab,MiniGameArea);
        popup.localPosition = spawnPosition;
        spawnPosition = new Vector3(spawnPosition.x,spawnPosition.y,spawnPosition.z);
    }
    else if(_networkAlerted && !_gameData.NetworkGameData.MaxReached)
    {
        _networkAlerted = false;
    }
}
```

# Technical Reflection:
---
So let's talk a bit about the technical approach to this project. Architecturally it looks a bit like the following:

![image showing 3 tiered diagram. first tier is the input manager that communicates with the game manager which communicates with submanagers](/img/dyj_diagram.png)

The Input manager handles delegation of input actions to the various sub-managers. It captures playre input and uses a z-axis raycast to identify if it is within the bounds of a minigame window. The input is then passed on to the manager of that respective window. Sub-managers are responsible for each individual minigame. They handle player actions and system reponses including triggers for effects and score change. Finally we have the game manager which keeps track of the macro game. It recives minigame scores and applies it to the various gauges while also handling a few fun things like the spam pop-ups.

Ok now it's time to talk about the big thing...render textures...You might be thinking what do render textures have to do with this? Well...at the time I started this project I had just learned how render textures work in Unity and how I could do a bunch of cool effects. I was a kid with a hammer and everything looked like nails. This resulted in me making probably the most baffling architectural decision I have ever made. I decided that all the minigames would be run outside the camera view and then rendered to a render texture which would then be rendered within windows on the main screen. This made the whole system a pain to work with because I had to basically transform every interaction that the player could have to the corresponding minigame object’s position based on the context of that interaction. But things weren't all bad. This approach got me to review my understanding of 2D transformations and coordinate spaces. However I would likely not do this again.
