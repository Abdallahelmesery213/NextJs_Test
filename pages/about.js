
export const getInitialProps = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
return {
    props: {posts : data}
}
}

const About = ({posts}) => {
    return (
        <div>
            <h1> Hello About</h1>
            <h4>Posts</h4>
            {/* <div className="container">
                {
                    posts.map(post => (
                        <div className="col-12 col-md-4" key={post.id}>
                            <div className="card" style="width: 18rem;">
                                
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default About;
