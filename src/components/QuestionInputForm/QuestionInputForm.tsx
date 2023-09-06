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
        break;
      case 'body':
        console.log('body')
        setBodyValue(event.target.value);
        break;
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {'title': titleValue, 'body': bodyValue}
    console.log('formData', formData)
  }

  return <div>
    <h1 className="font-bold underline">Testing</h1>
    <form onSubmit={handleSubmit}>
      <div>
      <label>Title:
      <input type="text" name='title' value={titleValue} onChange={handleTitleChange} className='ml-1'></input>
      </label>

      </div>

      <div>
      <label>Body:
      <input type='textarea' name='body' value={bodyValue}  onChange={handleTitleChange} className='ml-1'></input>
      </label>

      </div>

      <button type='submit'>Submit</button>
    </form>
    </div>;
};

export default QuestionInputForm;
