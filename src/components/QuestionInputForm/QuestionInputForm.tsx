import { useState } from "react";

const QuestionInputForm = () => {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
    const fieldName = event.target.name;
    switch (fieldName) {
      case 'title':
        setTitleValue(event.target.value);
      case 'body':
        setBodyValue(event.target.value)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {'title': titleValue, 'body': bodyValue}
    console.log('formData', formData)
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label className='ml-1'>Title:
      <input type="text" name='title' value={titleValue} onChange={handleTitleChange} className='ml-1'></input>
      </label>

      <label className='ml-1'>Body:
      <input type='textarea' name='body' value={bodyValue}  onChange={handleTitleChange} className='ml-1'></input>
      </label>

      <button type='submit'>Submit</button>
    </form>
    </div>;
};

export default QuestionInputForm;
