import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import emailjs from 'emailjs-com';
const Contact = ()=>{

    function formSub(e) {
        e.preventDefault();
       emailjs.sendForm('service_pxed1dk',
       'template_5qowih7',
       e.target,'user_PzIjEO9oZb4NzTbQiSqlx').then(res=>{console.log(res);}).catch(err=> console.log(err));
    };
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
         <div className='container cnt-p'>
         <h6 className='text-center'>Get in Touch</h6>
         <h2 className='text-center'>Contact</h2>
             <div className='row mt-5 px-5 mb-5'>
                 <div className='col-lg-6 col-md-6 col-12 left justify-content-lg-between'>
                     <div className='left-col1 d-flex '>
                         <div class='social-circle'><span><PhoneAndroidIcon/></span></div>
                         <p>+91-9913515884</p>
                     </div>
                     <div className='left-col2 d-flex'>
                         <div class='social-circle'><span><MailOutlineIcon/></span></div>
                         <p>81288vishu@gmail.com</p>
                     </div>
                     <div className='left-col3 d-flex'>
                         <div class='social-circle'><span><RoomIcon/></span></div>
                         <p>Vadodara, Gujarat, India</p>
                     </div>

                 </div>
                 <div className='col-lg-6 col-md-6 col-12'>
                 <form className='px-4' onSubmit={formSub}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email Address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Message</label>
                            <textarea rows='6' cols='4' className="form-control" name='message'/>
                        </div>
                        <button type="submit" className=" btn-form">Submit</button>
                    </form>
                 </div>
             </div>
         </div>
        </>
    );
};
export default Contact;