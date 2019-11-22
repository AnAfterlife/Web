import React from "react";
import { Comment, Icon, Tooltip, Avatar, List, Form, Button, Input } from 'antd';
import moment from 'moment';
var ReviewCss = require("./review.css")

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                发表评论
      </Button>
        </Form.Item>
    </div>
);



const data = [
    {
        actions: [<span>回复</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
               这个东西真的很好，我下次一定还要来！
        </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(1, 'days')
                    .format('YYYY-MM-DD HH:mm:ss')}
            >
                <span>
                    {moment()
                        .subtract(1, 'days')
                        .fromNow()}
                </span>
            </Tooltip>
        ),
    },
    {
        actions: [<span>回复</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                这个东西真的很好，我下次一定还要来！
        </p>
        ),
        datetime: (
            <Tooltip
                title={moment()
                    .subtract(2, 'days')
                    .format('YYYY-MM-DD HH:mm:ss')}
            >
                <span>
                    {moment()
                        .subtract(2, 'days')
                        .fromNow()}
                </span>
            </Tooltip>
        ),
    },
];

export default class Review extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const { comments, submitting, value } = this.state;
        return (
            <div className={ReviewCss.total}>
                <div className={ReviewCss.intotal}>
                    <div className={ReviewCss.top}>
                        <List
                            className="comment-list"
                            header={`${data.length} replies`}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <li>
                                    <Comment
                                        actions={item.actions}
                                        author={item.author}
                                        avatar={item.avatar}
                                        content={item.content}
                                        datetime={item.datetime}
                                    />
                                </li>
                            )}
                        />
                    </div>
                
                <div className={ReviewCss.bottom}>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <Editor
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    />
                </div>
                </div>
            </div>
        )
    }
}