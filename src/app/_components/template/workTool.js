"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SelectItem from "../modules/selectItem";
import SelectInput from "../modules/selectBox";
import { useFormik } from "formik";
import swal from "sweetalert";
import SelectBox from "../modules/selectBox";

// const Editor = dynamic(() => import("../../_components/modules/ck"), {
//   ssr: false,
// });

const NewProject = () => {
  const [isReadAblePrice, setIsReadAblePrice] = useState(false);
  const [isReadAbleDiscount, setIsReadAbleDiscount] = useState(false);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [tagError, setTagError] = useState(false);
  // const [articleText, setArticleText] = useState("");

  const addTag = () => {
    if (tag.trim()) {
      setTags((p) => [...p, `#${tag.trim()}`]);
    }
  };

  const generateProduct = useFormik({
    initialValues: {
      group: "",
      title: "",
      price: 0,
      articleText: "",
      articleVideo: "",
      discount: 0,
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);

      if (tags.length === 0) {
        return setTagError(true);
      } else if (!articleText.trim() && !articleVideo.trim()) {
        return swal({
          icon: "error",
          text: "ابتدا محتوا اموزشی خود را تولید کنید",
        });
      }

      const formData = new FormData();

      formData.append("group", values.group);
      formData.append("title", values.title);
      formData.append("price", values.price);
      formData.append("articleText", articleText);
      formData.append("articleText", "<div>testy text</div>");
      formData.append("articleVideo", values.articleVideo);
      formData.append("tags", tags);
      formData.append("discount", values.discount);

      setTimeout(async () => {
        await fetch("/api/product", {
          method: "POST",
          body: formData,
        })
          .then((res) => {
            setLoading(false);
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
        values.email = "";
        values.password = "";
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
        onSubmit={generateProduct.handleSubmit}
        className="flex flex-col gap-16"
      >
        <div className="w-full flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-wrap gap-10">
         

              <SelectBox formikInstance={generateProduct} />

              <input
                type="text"
                name="title"
                value={generateProduct.values.title}
                onChange={generateProduct.handleChange}
                required
                className="w-[30rem] h-[4.2rem] dark:bg-[#0d141f] text-[1.3rem] rounded-md border-1 outline-none border-gray-600/30 px-6 focus:outline-none"
                placeholder="سر تیتر مقاله خود را بنویسید..."
              />
              {generateProduct.touched.title &&
                generateProduct.errors.title &&
                generateProduct.errors.title}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="priceProduct" className="text-xl">
                قیمت مقاله به تومان:
              </label>
              <div
                id="priceProduct"
                className="xxl:w-[62.5rem] md:w-[56.5rem] px-5 xm:w-[40rem] w-[32rem] h-[4.2rem] flex items-center dark:bg-[#0d141f] rounded-md border-1 border-gray-600/30"
              >
                <input
                  type="number"
                  name="price"
                  value={generateProduct.values.price}
                  onChange={generateProduct.handleChange}
                  min="0"
                  className={`w-full bg-black/0 pl-6 focus:outline-none outline-none text-[1.3rem] ${
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
            </div>
            {generateProduct.touched.group &&
              generateProduct.errors.group &&
              generateProduct.errors.group}

            <div className="flex flex-col gap-2">
              <label htmlFor="discountProduct" className="text-xl">
                تخفیف مقاله به درصد:
              </label>
              <div
                id="discountProduct"
                className="xxl:w-[62.5rem] md:w-[56.5rem] px-5 xm:w-[40rem] w-[32rem] h-[4.2rem] flex items-center dark:bg-[#0d141f] rounded-md border-1 border-gray-600/30"
              >
                <input
                  type="number"
                  name="discount"
                  value={generateProduct.values.discount}
                  onChange={generateProduct.handleChange}
                  min="0"
                  max="100"
                  className={`w-full bg-black/0 pl-6 focus:outline-none outline-none text-[1.3rem] ${
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
            </div>

            {generateProduct.touched.group &&
              generateProduct.errors.group &&
              generateProduct.errors.group}
          </div>

          <div className="flex flex-col w-[50rem] dark:bg-[#0d141f] rounded-md border-1 border-gray-600/30 dark:shadow-2xl">
            <div className="w-full h-[4.2rem]">
              <input
                type="search"
                value={setTag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="برچسب های مورد نظر خود را وارد کنید..."
                className="w-3/4 h-full rounded-md outline-none focus:outline-none px-6 border-b-1 border-gray-600/35 text-[1.3rem] dark:bg-[#0d141f]"
              />
              <button
                onClick={addTag}
                type="button"
                className="w-1/4 h-full bg-second/80 active:bg-second/50 rounded-md text-[1.3rem] font-bold text-first"
              >
                اضافه کردن
              </button>
            </div>

            <div className="w-full h-auto flex flex-wrap p-6 gap-5 child:text-[1.2rem] font-light bg-black/0">
              {tags && tags.length > 0
                ? tags.map((item) => <span>{item}</span>)
                : null}
            </div>
          </div>
          {tagError && "حداقل یک برچسب بنویسید"}
        </div>
        {/* <Editor
          setArticleText={setArticleText}
          articleText={articleText}
          initialData="<p>در این قسمت مقاله خود را بنویسید</p>"
        /> */}
        <div className="w-full flex sm:flex-row flex-col items-center gap-8">
          <label
            htmlFor="articleVideo"
            className="xm:w-2/3 w-full h-24 cursor-pointer !rounded-3xl flex items-center justify-center !text-[1.4rem] sm:!text-[1.7rem] !font-light !text-first !bg-second/60 !hover:bg-second/80"
          >
            در صورت علاقه فیلم اموزشی خود را اپلود کنید
            <input
              type="file"
              name="articleVideo"
              onChange={(e) =>
                generateProduct.setFieldValue(
                  "articleVideo",
                  e.currentTarget.files[0]
                )
              }
              id="articleVideo"
              hidden
            />
          </label>
          <button
            type="submit"
            className="w-1/3 h-24 rounded-3xl flex items-center justify-center sm:text-[1.9rem] text-[1.6rem] font-bold bg-second/80 text-first cursor-pointer active:bg-second/80"
          >
            ذخیره کردن
          </button>
        </div>
        <div className="w-full h-24 rounded-3xl flex items-center justify-center sm:text-[1.9rem] text-[1.6rem] font-bold bg-second text-first cursor-pointer active:bg-second/80">
          ارسال مقاله
        </div>
      </form>
    </div>
  );
};

export default NewProject;
