import React, { useState, useEffect } from "react";
import useStyle from "./styles";
import { Typography, TextField, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: "",
        message: "",
        selectedFile: "",
    });
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyle();

    const post = useSelector(state => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (post)
            setPostData(post);
    }, [post])

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', selectedFile: '' });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        }

    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories.
                </Typography>
            </Paper>
        );
    }


    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">{currentId ? 'Editing' : 'Create'} a Memory</Typography>
                {/* <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) =>
                        setPostData({ ...postData, creator: e.target.value })
                    }
                /> */}
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>

                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
