import styled from 'styled-components'
import logoUrl from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    .pull-left{
        float:left
    }
    .pull-right{
        float:right
    }
    .iconfont{
        margin-right: 5px;
        font-size: 20px;
    }
`;

export const HeaderInner = styled.div`
    height: 58px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`;
export const HeaderContainer = styled.div`
    height: 58px;
    width: 960px;
    position: absolute;
    top: 0;
    transform: translateX(50%);
    right: 50%;
`;

export const NavItem = styled.a`
    height: 58px;
    line-height: 58px;
    font-size: 16px;
    padding: 0 15px;
    color: #333;
    &.cur{
        color: #ea6f5a;
    }
`;

export const Logo = styled.a.attrs({
    'href': '/'
})`
    display: block;
    height: 58px;
    width: 100px;
    border-bottom: 1px solid #f0f0f0;
    background: url(${logoUrl});
    background-size: cover;
`;

export const SearchWrapper = styled.div`
    height: 38px;
    position: relative;
    margin: 0px 5px 0 0;
    padding: 10px 0;
    span.iconfont{
        position: absolute;
        top: 15px;
        right:0;
        dispaly: block;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        font-size: 24px;
        color: #999;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    height: 38px;
    width: 240px;
    outline: none;
    border: 1px; solid #eee;
    font-size: 14px;
    border-radius: 40px;
    background: #eee;
    padding: 0 16px;
    box-sizing: border-box;

    &.slide-enter{
        width: 240px;
        transition: all .3s ease-out;
    }
    &.slide-enter-active{
        width: 320px;
        &+span{
            transition: all .3s ease-out;
            background-color: #969696;
            color: #fff !important;
        }
    }
    &.slide-enter-done{
        width: 320px;
        &+span{
            background-color: #969696;
            color: #fff !important;
        }
    }

    &.slide-exit{
        transition: all .3s ease-out;
    }
    &.slide-exit-active{
        width: 240px !important;
    }
    &.slide-exit-done{
        width: 240px;
    }
    
    &::placeholder{
        color: #999;
    }
`;

export const SearchInfoWrapper = styled.div`
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    width: 320px;
    left: 0;
    top: 100%;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
`;

export const SearchInfo = styled.div`
    box-sizing: border-box;
    padding: 10px;
    font-size: 13px;
    overflow:hidden;
`;

export const SearchInfoTitle = styled.div`
    height:20px;
    line-height:20px;
    .btn-refresh{
        cursor: pointer;
    }
    .refresh{
        width: 20px;
        height:20px;
        line-height:20px;
        display: inline-block;
        // transition: all .5s ease;
        margin-right:0;
        font-size: 14px;
        text-align: center;
        &.loading{
            animation:turn 1s linear infinite;  
        }
    }

    @keyframes turn{
        0%{-webkit-transform:rotate(0deg);}
        25%{-webkit-transform:rotate(90deg);}
        50%{-webkit-transform:rotate(180deg);}
        75%{-webkit-transform:rotate(270deg);}
        100%{-webkit-transform:rotate(360deg);}
      }
`;

export const SearchInfoItemList = styled.div`
    height:20px;
    line-height:20px;
`;

export const SearchInfoItem = styled.a`
    height:20px;
    line-height:20px;
    float:left;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 0 5px;
`;

export const LinkItem = styled.a`
    display: block;
    height: 38px;
    line-height: 38px;
    padding: 0 16px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    &.cur{
        color: #fff;
        background-color: #ea6f5a;
    }
`;