import { useState } from "react";

const QuestionInputForm = () => {
  const [titleValue, setTitleValue] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value)
  }

  return <div>
    <form>
      <label className='ml-1'>Title:
      <input type="text" value={titleValue} onChange={handleTitleChange} className='ml-1'></input>
      </label>
    </form>
    </div>;
};

export default QuestionInputForm;
