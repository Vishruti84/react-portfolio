import React, { useEffect, useState } from 'react';
import ProjInfo from './Components/ProjData1';
import ProjCard1 from './Components/ProjCard1';
const Project = ()=>{
    const [searchText,setSearchText] = useState('');
    const [ProjeData,setProjeData] = useState(ProjInfo);

    useEffect(()=>{
        if(searchText === '') return;
        setProjeData(()=>
            ProjInfo.filter((val) =>
                val.title.toLowerCase().match(searchText.toLowerCase())//if searchbar text matches with my project title 
            )                                                          //setProjeData will show the matched project(shown proj will be the new value of setProjeData)
        );
    }, [searchText]);

    function handleChange(e)  {
        e.preventDefault();
        setSearchText(e.target.value);
        if(!e.target.value.length > 0){
            setProjeData(ProjInfo);//if search bar is empty it will show all the projects.
        }
    }
    return(
        <>
        <br/>
        <br/>
         <div className="my-5 prj-p">
         <h4 className='text-center'>Some of my Recent Works</h4>
             <h2 className="text-center" >Projects</h2>
     </div>
     
        <div className="container-fluid mb-5 mx-auto">
            <div className="row mx-auto">
           
                <div className="col-10 mx-auto">
                <div className='searchbar  mx-auto'>
                    <form>
                    <input type='text' placeholder='Project Name' className='form-control' value={searchText} onChange={handleChange}/>
                    </form>
                </div>
                <div className="row gy-1 mx-auto">
               {ProjeData.map((val,index)=>{
                   return<ProjCard1
                       key={index}
                      id={val.id}
                       imgsrc={val.imgsrc}
                       link={val.link}
                       title={val.title}
                       text={val.text}
                   />
               })}
                   
                </div> 
                </div>
            </div>
        </div>
        
        </>
    );
};
export default Project;