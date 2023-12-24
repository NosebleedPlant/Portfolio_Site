
export default function Test({url,width}) {
    return(
        <video width={width} controls>
            <source src= {url} type="video/mp4"/>
        </video>
    );
}


{/* <video style="width: 100%;" controls>
<source src="https://user-images.githubusercontent.com/42461443/210529297-732b5697-3539-4547-a032-cc7917f59056.mp4" type="video/mp4" />
</video> */}