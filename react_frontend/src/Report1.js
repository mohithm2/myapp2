import React,{Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';

export class Report extends Component{

    constructor(props){
        super(props);
        this.state={posts:[],imps:[],rch:[],eng:[]}
    }
    handleFormSubmit = (event) => {
            event.preventDefault();
            const name = event.target.elements.name.value;
            const hastag = event.target.elements.hastag.value;

            console.log(name,hastag);
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
        const columns = [{
            dataField: 'caption',
            text: 'Caption'
        },{
            text: 'Comments_Count',
            dataField: 'comments_count'
        },{
            text: 'Like_Count',
            dataField: 'like_count'
        },{
            text: 'Image',
            dataField: 'image'
        },{
            text: 'Engagement',
            dataField: 'engagement'
        },{
            text: 'Impressions',
            dataField: 'impressions'
        },{
            text: 'Reach',
            dataField: 'reach'
        },{
            text: 'Username',
            dataField: 'username'
        },{
            text: 'TimeStamp',
            dataField: 'timestamp'
        },{
            text: 'Post_id',
            dataField: 'post_id'
        },
        
        ];
        const selectRow = {
            mode: 'checkBox',
            clickToSelect: true,
            style: { background: '#def3ff' },
            
          };
        return(
            <div>
                
               <form className="form-group" onSubmit={this.handleFormSubmit}>
               <BootstrapTable
                     keyField='post_id'
                     data={ posts }
                     columns={ columns }
                     selectRow={ selectRow }
                />
               <label htmlFor="formGroupExampleInput">Name</label>
                <input
                    name = "name"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                />
                <label htmlFor="formGroupExampleInput">Hashtag</label>
                <input
                    name = "hastag"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                />
                <br/>
                <Button type="primary" htmlType="submit" value="Generate Report">Generate Report</Button>
               </form>
            </div>
            
        )
    }
}