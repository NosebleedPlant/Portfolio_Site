import styles from '@/styles/post.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'; 

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
        postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <main>
            <div className={styles.post}>
                <h1>{postData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={styles.md}/>
            </div>
        </main>
    );
}