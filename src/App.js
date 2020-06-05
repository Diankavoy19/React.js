import React from 'react';
import './App.css';
import Item from './Item/Item';
import Date from './Item/Date';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      Items : Date
    }
  }
  handleChange=id=>{
    const index=this.state.Items.map(item => item.id).indexOf(id);
    this.setState(state =>{
      let{Items}=state;
      Items[index].completed=true;
      return Items;
    })
  }
  render(){
    const{Items}=this.state;
    const activeTasks=Items.filter(task =>task.completed===false);
    const completedTasks=Items.filter(task =>task.completed===true);
    const finalTasks = [...activeTasks,...completedTasks].map(item=>{
      return(
        <Item 
        key={ item.id}
        description={item.description}
        links={item.links}
        about={item.about}
        pics={item.pics}
        completed={item.completed}
        handleChange={()=>{this.handleChange(item.id) }}
        />
      )
    })
    return (
   <div className="App">
     <div className="header">
     <h1 className="title">Які фільми ти переглянув?</h1><br></br>
     <center>
         <table className="Seach1" >
         <tr>
           <td><a href="https://jarvis.net.ua/" className="c">Пошук фільмів</a><br></br></td>
         <td><a href="https://kino-teatr.ua/uk/main/films/year/2020.phtml" className="c">Топ фільми 2020</a></td>
         <td><a href="https://www.unian.ua/lite/kino/10736790-krashchi-filmi-2019-top-kinoprem-yer-yaki-povinen-pobachiti-kozhen-video.html" className="c">Топ фільми 2019</a></td>
         <td><a href="https://www.kinoafisha.info/rating/movies/2018/" className="c">Топ фільми 2018</a></td></tr>
         </table></center>
     <div className="header_inner">
       <div className="header-logo"></div>
       <div className="Seach">
       </div> 
       </div></div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
     <h2 className="t">Фільми:</h2>
     <center>{finalTasks}</center>
     <br></br>
   </div>
 );
}
}

export default App;
