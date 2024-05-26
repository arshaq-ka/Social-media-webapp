import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Avatar } from "@mui/material";
import { useFormik } from "formik";

import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useDispatch } from 'react-redux';
import { createTweetReply } from '../../Store/Twit/Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline:'none',
  borderRadius:4,
};

export default function ReplyModal({handleClose,open,item}) {
  
  //const [open, setOpen] = React.useState(false);
  
  
  const navigate=useNavigate();
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectImage, setSelectedImage] =React.useState("");
  const dispatch=useDispatch();
 
  const handleSubmit=(values)=>{

    dispatch(createTweetReply(values))
    handleClose();

    console.log("handle Submit,",values)
  }
  const formik=useFormik({
    initialValues:{
        content:"",
        image:"",
        twitId:item.item?.id
    },
    onSubmit:handleSubmit
  })
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex space-x-5">
                <Avatar
                onClick={()=>navigate(`/Account/${6}`)}
                className="cusror-pointer"
                alt="userName"
                src="https://tse3.mm.bing.net/th?id=OIP.WoZKI3d2la4MLit8qi1ncAHaG-&pid=Api&P=0&h=180"/>

                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center cursor-pointer space-x-2">

                            <span className="font-semibold">Darshan</span>
                            <span className="text-gray-600">@darshan .2m</span>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.1VINrLF6q3e1ifJPHGhnfgHaHa&pid=Api&P=0&h=180"
                            className="ml-2 w-5 h-5"/>
                        </div>
                        <div>
            
                        </div>


                    </div>
                    <div className="mt-2">
                        <div className="cursor-pointer"onClick={()=>navigate(`/twit/${3}`)}>
                            <p className="mb-2 p-0">Dashan is a very big Lind</p>
                        
                        </div>
                        
                    </div>
                </div>
              
                
            </div>
            <section className={`py-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://tse3.mm.bing.net/th?id=OIP.WoZKI3d2la4MLit8qi1ncAHaG-&pid=Api&P=0&h=180"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is Happening?"
                  className={`border-none outline-none  bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <diV>
                            <img src="" alt=""
                            </diV>*/}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1b9df0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1b9df0]" />
                  <TagFacesIcon className="text-[#1b9df0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "90%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
         
        </Box>
      </Modal>
    </div>
  );
}