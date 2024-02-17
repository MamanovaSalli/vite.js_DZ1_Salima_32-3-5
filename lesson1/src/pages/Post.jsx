// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

// eslint-disable-next-line react/prop-types
const PostForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert('Please fill in all fields');
            return;
        }
        onSubmit({title, content});
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="ext">
                <label htmlFor="title">Enter:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="ext">
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button className="button" type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;

