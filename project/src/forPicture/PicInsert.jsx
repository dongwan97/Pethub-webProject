import { MdAdd } from "react-icons/md";
import { useState, useCallback, useEffect } from "react";

const TodoInsert = ({ onInsert }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const onImageChange = useCallback((e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!selectedImage) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        onInsert(reader.result);
        setSelectedImage(null);
      };
      reader.readAsDataURL(selectedImage);
    },
    [onInsert, selectedImage]
  );

  useEffect(() => {
    if (selectedImage) {
      setUploadedImages((prevImages) => [...prevImages, selectedImage]);
    }
  }, [selectedImage]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="file" onChange={onImageChange} accept="image/*" />
      {uploadedImages.map((image, index) => (
        <img key={index} src={URL.createObjectURL(image)} alt="Uploaded" />
      ))}
      <button type="submit" disabled={!selectedImage}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
