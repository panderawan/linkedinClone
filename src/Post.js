import React, {forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import InputOption from './InputOption';

const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpOffAltIcon} title="J'aime" color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='Commenter' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Republier' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Envoyer' color='gray' />
      </div>
    </div>
  );
})

export default Post;
