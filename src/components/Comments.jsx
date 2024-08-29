import React from 'react'
import { CgProfile } from "react-icons/cg";


const commentsList = [
    {
        name: 'Yahya',
        commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
        replies: [
            {
                name: 'Yahya',
                commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
                replies: [
                    {
                        name: 'Yahya',
                        commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
                    }
                ]
            },
        ]
    },
    {
        name: 'Yahya',
        commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
        replies: [
            {
                name: 'Yahya',
                commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
                replies: [
                    {
                        name: 'Yahya',
                        commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
                        replies: [
                            {
                                name: 'Yahya',
                                commentText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit culpa magnam et?",
                                
                            },
                        ]
                    },

                ]
            },
        ]
    },
];

const Comment = ({commentDetails}) => {
    const {name, commentText} = commentDetails;
    return (
        <div className='m-1 p-2 flex items-center gap-3'>
            <CgProfile size={32} />
            <div>
                <p className='font-bold '>{name}</p>
                <p>{commentText}</p>
            </div>
        </div>
    );
}

const CommentTree = ({comments}) => {
    return comments.map(comment => (
        <div>
            <Comment commentDetails={comment} />
            {
                comment['replies'] && <div className='ml-8 border-l border-black'><CommentTree comments={comment['replies']} /></div>
            }
        </div>
    )) 
}

const Comments = () => {
  return (
    <div className='bg-gray-300 p-3 rounded-xl'>
        <h3 className='text-2xl font-bold'>Comments</h3>
        <CommentTree comments={commentsList} />
    </div>
  )
}

export default Comments