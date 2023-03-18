import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, author, details, image_url, title, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center p-2'>
                        <Image src={author.img} roundedCircle alt="" style={{ height: '45px' }} />
                        <div className='ms-2'>
                            <p className='m-0'><strong>{author.name}</strong></p>
                            <p className='m-0'>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Img variant="top" className='mb-3 mt-2' src={image_url} />
                    <Card.Text>
                        {
                            details.length > 350 ?
                                <p>{details.slice(0, 350) + '...'} <Link to={`/news/${_id}`}>Read  More</Link></p> : details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='d-flex align-items-center p-2'>
                        <FaStar className='text-warning'></FaStar>
                        <p className='mb-0 ms-2'>{rating.number}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye></FaEye>
                        <p className='mb-0 ms-2'>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;