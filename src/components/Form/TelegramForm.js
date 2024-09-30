import React, {useState} from "react";
import axios from "axios";
import style from "./TelegramForm.module.css";

const TelegramForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(
    "https://papik.pro/grafic/uploads/posts/2023-04/1681639749_papik-pro-p-kamera-logotip-vektor-10.png"
  ); // Для предпросмотра

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Устанавливаем предпросмотр
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      console.log(previewURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("chat_id", "-4587871871"); // Замените на ID чата или имя пользователя
    formData.append("caption", text);
    if (image) {
      formData.append("photo", image);
    }

    try {
      await axios.post(
        `https://api.telegram.org/bot7724115579:AAF-NYLAXrPapNg_pbHZ8QAQS-VrGMy0dx0/sendPhoto`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImage(null);
      setText("");
      setPreview(
        "https://papik.pro/grafic/uploads/posts/2023-04/1681639749_papik-pro-p-kamera-logotip-vektor-10.png"
      );
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Что пошло не так!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.inputFile}>
        <label
          htmlFor="file"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          Загрузите фото
        </label>
        <input type="file" id="file" onChange={handleImageChange} />
      </div>
      {/* <img src={preview} alt="Предпросмотр" width="100px" /> */}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Отправка..." : "Отправить"}
      </button>
    </form>
  );
};

export default TelegramForm;
