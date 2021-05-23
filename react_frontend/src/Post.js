import React,{Component} from 'react';
import { Table} from 'react-bootstrap';

export class Post extends Component{

    constructor(props){
        super(props);
        this.state={posts:[]}
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'post')
        .then(response=>response.json())
        .then(data=>{
            this.setState({posts:data});
            
        },[]);  
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {posts} = this.state;
        return(
            <div>
                
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                        <tr>
                        <th>Caption</th>
                        <th>comments_count</th>
                        <th>like_count</th>
                        <th>Image</th>
                        <th>Enagagement</th>
                        <th>Impressions</th>
                        <th>Reach</th>
                        <th>post_id</th>
                        <th>username</th>
                        <th>Timestamp</th>
                        </tr>
                </thead> 
                <tbody>
                    {posts.map(post=>
                            
                                <tr key={post.post_id}>
                                    <td>{post.caption}</td>
                                    <td>{post.comments_count}</td>
                                    <td>{post.like_count}</td>
                                    <td ><img src="{post.image}" alt ="" width="100" height="100"></img></td>
                                    <td>{post.engagement}</td>
                                    <td>{post.impressions}</td>
                                    <td>{post.reach}</td>
                                    <td>{post.post_id}</td>
                                    <td>{post.username}</td>
                                    <td>{post.timestamp}</td>

                                </tr> )
                    }
                </tbody>

                </Table>
            </div>
        )
    }
}