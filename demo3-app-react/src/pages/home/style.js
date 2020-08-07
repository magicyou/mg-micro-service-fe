import styled from 'styled-components'
export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;

`;

export const HomeLeft = styled.div`
    padding-top: 30px;  
    width: 640px;
    min-height: 200px;
    float: left;
`;

export const HomeBanner = styled.a.attrs({
    href: '/#'
})`
    display:block;
    width: 640px;
    min-height: 200px;
    img{
        width:100%;
        border-radius: 10px;

    }
`;


export const HomeRight = styled.div`
    padding-top: 30px;  
    width: 280px;
    min-height: 200px;
    float: left;
    margin-left: 40px;
`;


export const TopicWrapper = styled.div`
    width: 100%;
    padding: 20px 0 10px;
    border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
    display:inline-block;
    height: 30px;
    padding: 0 20px 0 0;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    font-size: 14px;
    margin: 0 10px 10px;
    overflow: hidden;
    img{
        width: 30px;
        height: 30px;
        margin-right: 20px;
        float:left;
    }
    span{
        line-height: 30px;
    }
`;

export const ArticleItem = styled.div`
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    position: relative;
    .wrap-img{
        width: 125px;
        height: 100px;
        display: block;
        position: absolute;
        right: 0;
        img{
            width: 100%;
        }
    }
    .wrap-content{
        padding-right: 165px;
    }
    .txt-title{
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 4px;
        a{
            color: #333;
        }
    }
    .txt-disc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .txt-other{
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        span{
            margin-right: 10px;
        }
    }
`;

export const LoadMore = styled.button`
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    width: 100%;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    outline: none;
    cursor: pointer;
`;
export const RecommentWrapper = styled.div`
    display:inline-block;
    a{
        display: block;
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        img{
            height:100%;
            width:100%;
        }
    }
`;


export const WriterWrapper = styled.div`
    margin-top: 15px;
`;

export const WriterTitle = styled.div`
    font-size: 14px;
    color: #969696;
    overflow: hidden;
    line-height: 20px;
    .btn-refresh{
        float: right;
        .iconfont{
            margin-right: 5px;
        }
    }
`;
export const WriterList = styled.ul`
    overflow: hidden;
    li{
        margin-top: 15px;
        float: left;
        width:100%;
    }
    .img-avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    .box-info{
        margin-left: 48px;
        font-size: 14px;
        .txt-name{
            margin-top: 8px;
            color: #333;
        }
        .btn-attr{
            float:right;
            margin-top: 5px;
            padding: 0;
            font-size: 13px;
            color: #42c02e;
        }
        .txt-info{
            margin-top: 10px;
            font-size: 12px;
            color: #969696;
        }
    }
`;

export const BackToTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    display: block;
    border: 1px solid #dcdcdc;
`;