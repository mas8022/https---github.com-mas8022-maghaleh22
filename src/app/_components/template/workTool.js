"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import swal from "sweetalert";
import SelectBox from "../modules/selectBox";
import Uploader from "../modules/uploader";
import Button from "../modules/Button";
import GetVideoDuration from "../../_components/modules/getVideoDuration";

const Editor = dynamic(() => import("../../_components/modules/ck"), {
  ssr: false,
});

const NewProject = () => {
  const [isReadAblePrice, setIsReadAblePrice] = useState(false);
  const [isReadAbleDiscount, setIsReadAbleDiscount] = useState(false);
  const [articleText, setArticleText] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState(null);
  const [duration, setDuration] = useState(0);

  const addTag = () => {
    if (tag.trim()) {
      setTags((p) => [...p, tag]);
      setTag("");
    }
  };

  const generateProductFormik = useFormik({
    initialValues: {
      group: "",
      title: "",
      price: "",
      articleVideo: "",
      discount: "",
      cover: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.group) {
        errors.group = "یک دسته برای محتوا خود انتخاب کنید";
      } else if (!values.title.trim()) {
        errors.title = "عنوان محتوا را وارد کن";
      } else if (!values.cover) {
        errors.cover = "عکس کاور محتوا را بارگذاری کنید";
      } else if (!tags?.length) {
        errors.tags = "هی�� تگی برای محتوا انتخاب نشده ا��ت";
      } else if (!articleText.trim() && !values.articleVideo) {
        swal({
          icon: "error",
          text: "ابتدا محتوا اموزشی خود را تولید کنید",
        });
      }
      setFile(values?.articleVideo);
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      setLoader(true);

      const formData = new FormData();

      formData.append("group", values.group);
      formData.append("title", values.title);
      formData.append("price", values.price);
      formData.append("articleText", articleText);
      formData.append("articleVideo", values.articleVideo);
      formData.append("tags", JSON.stringify(tags));
      formData.append("discount", values.discount);
      formData.append("cover", values.cover);
      formData.append("duration", duration);

      setTimeout(async () => {
        await fetch("/api/product", {
          method: "POST",
          body: formData,
        })
          .then((res) => {
            setLoader(false);
            return res.json();
          })
          .then((result) => {
            if (result.status === 201) {
              swal({
                icon: "success",
                title: "مقاله با موفقیت فرستاده شد",
                text: result.message,
              });
            } else {
              swal({
                icon: "error",
                title: result.message,
              });
            }
          });
        setSubmitting(false);
      }, 3000);
    },
  });

  return (
    <div className="w-full pb-20 pt-5 flex flex-col gap-16">
      <div className="describe w-full px-16 py-10 text-[1.6rem] text-first bg-second/70 rounded-3xl text-center">
        سلام خوش امدین به سایت مقاله در این قسمت شما میتوانید مقاله خود را ارسال
        کنید شما ابتدا باید فورم های زیر را پر کرده سپس مقاله خود را توسط ادیتور
        که در همین صفحه تعویه شده نوشته و حتی با بستن سایت هم اطلاعات شما ذخیره
        میشود و می توانید بعدا ادامه مقاله خود را بنویسید و همچنین میتوانید غیر
        از مقاله فیلم اموزشی خود را نیز اپلود کنید حتی اگر تنها فیلم اموزشی
        دارید باز هم میتوانید بدون مقاله و تنها با فیلم اموزشی خود مقاله خود را
        جهت بررسی برای ما بفرستید و درصورت تایید از سمت ما ان را در سایت منتشر
        می کنیم و به شما اطلاع خواهیم داد
      </div>
      <form
        onSubmit={generateProductFormik.handleSubmit}
        className="flex flex-col gap-16"
      >
        <div className="w-full flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col flex-wrap gap-2">
                <SelectBox formikInstance={generateProductFormik} />
                <span className="text-[1.2rem] font-light text-red-500">
                  {generateProductFormik.touched.group &&
                    generateProductFormik.errors.group &&
                    generateProductFormik.errors.group}
                </span>
              </div>
              <div className="flex flex-col flex-wrap gap-2">
                <input
                  type="text"
                  name="title"
                  value={generateProductFormik.values.title}
                  onChange={generateProductFormik.handleChange}
                  className="w-[30rem] h-[4.2rem] dark:bg-[#0d141f] text-[1.3rem] text-black dark:text-first rounded-md border-[1px] outline-none border-gray-600/30 px-6 focus:outline-none"
                  placeholder="سر تیتر مقاله خود را بنویسید..."
                />
                <span className="text-[1.2rem] text-red-500">
                  {generateProductFormik.touched.title &&
                    generateProductFormik.errors.title &&
                    generateProductFormik.errors.title}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="priceProduct"
                className="text-xl text-black dark:text-first"
              >
                قیمت مقاله به تومان:
              </label>

              <div className="flex flex-col flex-wrap gap-2">
                <div
                  id="priceProduct"
                  className="xxl:w-[62.5rem] md:w-[56.5rem] px-5 xm:w-[40rem] w-[32rem] h-[4.2rem] flex items-center dark:bg-[#0d141f] rounded-md border-[1px] border-gray-600/30"
                >
                  <input
                    type="number"
                    name="price"
                    value={generateProductFormik.values.price}
                    onChange={generateProductFormik.handleChange}
                    min="0"
                    className={`w-full bg-black/0 pl-6 focus:outline-none outline-none text-[1.3rem] text-black dark:text-first ${
                      isReadAblePrice && "text-first/55"
                    }`}
                    placeholder="قیمت مقاله خود را به ریال بنویسید (مانند: 150000)"
                    readOnly={isReadAblePrice}
                  />
                  <div className="flex gap-6 h-full py-2">
                    <div
                      onClick={() => setIsReadAblePrice(false)}
                      className="px-6 py-3 flex items-center justify-center text-[1.4rem] text-first font-light bg-second/60 rounded-lg active:"
                    >
                      ویرایش
                    </div>
                    <div
                      onClick={() => setIsReadAblePrice(true)}
                      className="px-6 py-3 flex items-center justify-center text-[1.4rem] text-first font-light bg-second/80 rounded-lg active:"
                    >
                      تایید
                    </div>
                  </div>
                </div>
                <span className="text-[1.2rem] text-red-500">
                  {generateProductFormik.touched.price &&
                    generateProductFormik.errors.price &&
                    generateProductFormik.errors.price}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="discountProduct"
                className="text-xl text-black dark:text-first"
              >
                تخفیف مقاله به درصد:
              </label>
              <div className="flex flex-col flex-wrap gap-2">
                <div
                  id="discountProduct"
                  className="xxl:w-[62.5rem] md:w-[56.5rem] px-5 xm:w-[40rem] w-[32rem] h-[4.2rem] flex items-center dark:bg-[#0d141f] rounded-md border-[1px] border-gray-600/30"
                >
                  <input
                    type="number"
                    name="discount"
                    value={generateProductFormik.values.discount}
                    onChange={generateProductFormik.handleChange}
                    min="0"
                    max="100"
                    className={`w-full bg-black/0 pl-6 focus:outline-none outline-none text-[1.3rem] text-black dark:text-first ${
                      isReadAbleDiscount && "text-first/55"
                    }`}
                    placeholder="از 0 تا 100 مقدار تخفیف برای مقاله خود در نظر بگیرید"
                    readOnly={isReadAbleDiscount}
                  />

                  <div className="flex gap-6 h-full py-2">
                    <div
                      onClick={() => setIsReadAbleDiscount(false)}
                      className="px-6 py-3 flex items-center justify-center text-[1.4rem] text-first font-light bg-second/60 rounded-lg active:"
                    >
                      ویرایش
                    </div>
                    <div
                      onClick={() => setIsReadAbleDiscount(true)}
                      className="px-6 py-3 flex items-center justify-center text-[1.4rem] text-first font-light bg-second/80 rounded-lg active:"
                    >
                      تایید
                    </div>
                  </div>
                </div>
                <span className="text-[1.2rem] text-red-500">
                  {generateProductFormik.touched.discount &&
                    generateProductFormik.errors.discount &&
                    generateProductFormik.errors.discount}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap gap-2 w-[50rem] dark:bg-[#0d141f] rounded-md border-[1px] border-gray-600/30 dark:shadow-2xl">
            <div className="flex flex-col">
              <div className="w-full h-[4.2rem] flex">
                <input
                  type="search"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="برچسب های مورد نظر خود را وارد کنید..."
                  className="w-3/4 h-full rounded-md outline-none focus:outline-none px-6 border-b-[1px] border-gray-600/35 text-[1.3rem] text-black dark:text-first dark:bg-[#0d141f]"
                />
                <div
                  onClick={addTag}
                  type="button"
                  className="w-1/4 h-full flex items-center justify-center bg-second/80 active:bg-second/50 rounded-md text-[1.3rem] font-bold text-first"
                >
                  اضافه کردن
                </div>
              </div>

              <div className="w-full h-auto flex flex-wrap p-6 gap-5 child:text-[1.2rem] font-light bg-black/0">
                {tags?.length
                  ? tags.map((item, index) => (
                      <span key={index} className="text-black dark:text-first">
                        {item}
                      </span>
                    ))
                  : null}
              </div>
            </div>
            {!tags?.length && (
              <span className="self-center text-[1.2rem] text-red-500">
                حداقل یک برچسب بنویسید
              </span>
            )}
          </div>
        </div>
        <Editor
          setArticleText={setArticleText}
          articleText={
            articleText
              ? articleText
              : "<p>در این قسمت مقاله خود را بنویسید</p>"
          }
        />
        <div className="w-full flex sm:flex-row flex-col items-center gap-8">
          <Uploader
            formHandler={generateProductFormik}
            label="در صورت علاقه فیلم اموزشی خود را اپلود کنید"
            name="articleVideo"
            customClass="xm:w-2/3 w-full h-24 !rounded-3xl flex items-center justify-center !text-[1.4rem] sm:!text-[1.7rem] !font-light cursor-pointer !text-first !bg-second/60 !hover:bg-second/80"
          />
          <div className="w-1/3 flex flex-col gap-2 items-center">
            <Uploader
              formHandler={generateProductFormik}
              label="کاور مقاله"
              name="cover"
              customClass="w-full h-24 rounded-3xl flex items-center justify-center sm:text-[1.9rem] text-[1.6rem] font-bold bg-second/70 text-first cursor-pointer active:bg-second/80"
            />
            <span className="text-[1.2rem] text-red-500">
              {generateProductFormik.touched.cover &&
                generateProductFormik.errors.cover &&
                generateProductFormik.errors.cover}
            </span>
          </div>
        </div>

        <Button
          buttonType="submit"
          label="ذخیره کردن"
          loader={loader}
          customClass="w-full h-24 rounded-3xl flex items-center justify-center sm:text-[1.9rem] text-[1.6rem] font-bold bg-second/80 text-first cursor-pointer active:bg-second/80"
        >
          ذخیره کردن
        </Button>
        <div className="w-full h-24 rounded-3xl flex items-center justify-center sm:text-[1.9rem] text-[1.6rem] font-bold bg-second text-first cursor-pointer active:bg-second/80">
          ارسال مقاله
        </div>
      </form>
      <GetVideoDuration file={file} setDuration={setDuration} />
    </div>
  );
};

export default NewProject;
