import React from 'react';

import { 
    Row, 
    Col, 
    Tag, 
    Typography 
} from 'antd';
const TextTitle = Typography.Title;

const MovieDetail = ({Title,Year, Poster, imdbRating, Rated, Runtime, Genre, Plot}) => {
    return (
        <Row>
            <Col span={11}>
                <img 
                    src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} 
                    alt={Title} 
                />
            </Col>
            <Col span={13}>
                <Row>
                    <Col span={21}>
                        <TextTitle level={4}>{Title}</TextTitle></Col>
                        {/* <h4>{Year}</h4> */}
                    <Col span={2} style={{textAlign:'right'}}>
                        <TextTitle level={4}><span style={{color: '#41A8F8'}}>{imdbRating}</span></TextTitle>
                    </Col>
                    <Col span={15} style={{textAlign:'left'}}>
                        <h4>REALEASE Year: {Year}</h4>
                    </Col>
                        {/* <Col span={10}><h4>Release Year: {Year}</h4></Col> */}
                </Row>
                <Row style={{marginBottom: '20px'}}>
                    <Col>
                        {/* <Tag>{Year}</Tag>  */}
                        <Tag>{Rated}</Tag> 
                        <Tag>{Runtime}</Tag> 
                        <Tag>{Genre}</Tag>
                    </Col>
                </Row>
                <Row>
                    <Col>{Plot}</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default MovieDetail;