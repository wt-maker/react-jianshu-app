import styled from 'styled-components';

export const TopicWrapper = styled.div`
  border-bottom: 1px solid #dcdcdc;
  margin-top: 30px;
  overflow: hidden;
  padding-bottom: 30px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  font-size: 14px;
  margin-right: 20px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background: #f7f7f7;
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    float: left;
  }
`;

export const NewsListWrapper = styled.div`
  margin-top: 30px;
  
`;

export const NewsItem = styled.div`
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 30px;
  margin-bottom: 30px;
  img {
    float: right;
    width: 100px;
    height: 80px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    color: #999;
    line-height: 24px;
  }
`;

export const NewsContent = styled.div`

`;

export const MoreNewsLlist = styled.div`
  width: 100%;
  height: 40px;
  background: #a5a5a5;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const RecommendWrapper = styled.div`
`;

export const RecommentItem = styled.div`
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
`;