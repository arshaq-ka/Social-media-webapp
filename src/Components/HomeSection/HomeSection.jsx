import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "../HomePage/TweetCard";
import { useDispatch, useSelector } from "react-redux";
import { createTweet, getAllTwits } from "../../Store/Twit/Action";
import { uploadToCloudinary } from "../../Utils/uploadToCloudinary";

 

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const dispatch=useDispatch();
  const {twit}=useSelector(store=>store);
  const {auth}=useSelector(store=>store)
  console.log("twit",twit)

  const handleSubmit = (values,actions) => {
    dispatch(createTweet(values))
    actions.resetForm()
    console.log("values ", values);
    setSelectedImage("")
  };


  useEffect(()=>
  {

    dispatch(getAllTwits())
    

  },[twit.like,twit.retwit])

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = async (event) => {
    setUploadImage(true);
    const imageUrl = await uploadToCloudinary(event.target.files[0])
    formik.setFieldValue("image", imageUrl);
    setSelectedImage(imageUrl);

    setUploadImage(false);
  };
  return (
    <div className="space-y-5">
      <section>
        <h1 className="font-bold text-x1 py-5 opacity-90 ">HOME</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src={auth.user?.image}
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  className={`border-none outline-none text-x1 bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              <div></div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="ImageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <Button
                  sx={{
                    width: "20%",
                    borderRadius: "29px",
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
            </form>

            <div>
            {selectImage && <img src={selectImage} alt=""/>}
            </div>
          </div>
        </div>
      </section>
      <section>
        
       {twit.twits?.map((item)=><TweetCard item={item}/>)} 
      </section>
      
    </div>
  );
};

export default HomeSection;
//install formik and yup
