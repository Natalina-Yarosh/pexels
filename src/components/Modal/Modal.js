import React, {useState  } from "react";
import  style from './Modal.module.css';
import ItemSizeDownloadPicture from './ItemSizeDownloadPicture/ItemSizeDownloadPicture';
import { connect } from 'react-redux';
import {getPictures} from '../../redux/getPicturesReducer';
import styled from 'styled-components';

const WrapperModal = styled.section`
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(12,15,19,.8);
    padding: 30px;
    width: 100%;
    height: 100%;
    z-index: 3;
    display:block
`;



const Modal = (props) => {   
    
    console.log(props)

    


    
    let resultIdRender = props.items.filter(item => item.id == props.modalId)
    console.log(resultIdRender)
    console.log(resultIdRender[0].src)
    
    //const changeShowModal = () => {changeModal => !changeModal  }
    
    return(
        
        <WrapperModal >
        
            <div className = {style.sectionModal}>
                <div>
                    
                        <img  
                            onClick = {(e) => props.changeView()}
                            className = {style.pictupeClose} 
                            src = 'https://www.tradeoakbuildingkits.com/wp-content/plugins/portfolio-filter-gallery-premium/img/x-close-icon-white.png' 
                            alt  = '' 
                            />
                    
                </div>
                <img 
                   className = {style.pictureModal} 
                   //src  = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ4PDw0NDQ8QDw8PDw8NDw8NDQ0NFREWFhUVFhUYHSogGBolGxUVITIhJSkrLi4vFyAzODMuOCgtLysBCgoKDg0OFxAQFy0lHR8tLS4tKy8tLS0rLSstLS0tLS0tLS0tLSstLSstLS0tLS0vLS0rKy0tLSsrLSstLS0tLv/AABEIALUBFgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAYHBQj/xAA+EAABAwIDBgQEAwUIAwEAAAABAAIDBBEFEiEGEzFBUWEHInGBIzKRoRRCsTNSYnLBU2NzgrLR4fEXQ/AV/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACMRAQEAAgICAgIDAQAAAAAAAAABAhEDBCExBRJBURQiYXH/2gAMAwEAAhEDEQA/AOGqURBKKEQFClQgIpRARQiApUKWgnQC/oguRROcbNBJ7K9T0E0j92yNxd0WybF02WXLNG5ubhmba4XTsJwGETiQMGoFjZGLk0HZ7YF8rCZmlruQWJBsg9mJMhcCY/m/4X0BT0DQ0WAXiV2Ft/EtfbUKputfr9iqeWNrMgtYcl42OeGtPHTucxpa4NJv3XVGQ8FdrqUPiII5KD5JlZlc5v7pI+hVK3XxA2XNNNJMwWYTmI5AlaUjpBSFClAUhQpURKhCiCEUoghFNlNlRSikqlFSihEBERBCIiAiIglFCIJUIiAiIgL1dmHMFZDnFxmt7ryltnh/SwPqM0tiW8Af1RL6dhGDQyxNIYLgAg21WZh8Do7DiAr1BUR5Q1pCzwAUtc2dRSi1larWDPdY4ky8FalqSSvjdv5ni4Mrh7sezi6mWc29emaDZXqoC1l5VPUlqzJ5/hk9l36XyXF25/X3Pwxy8GXH7cw8X52Mo3jTM8ho6riK69tdglXiVT5rx08ZNr/mK51tLhDaSQNBOt9DqvoxxleMpUKQq0lSoUqIgqFKhAUqFIQSiIgpKhSVCqiIiAiIghFKIIRSiCEUoghFKhAREQSq4ZnsOZji09QbKhEG14DtpPAQJCXjqutbM7WQVLB5xfovnpX6arliN43uYexUsTT6fMjXatIKp0uuLbO+IUsNmz3cP3hxC9uv8SY9N3dx7L4Hc+Ew5s7nLq16+PtXCasdTJFuICmpxKGGIue9oAGpJ0C4jXeItSRaNtj1JWuYrtLWVTckspyc2tuAfVe7pfHcXW84TzXLl5suT26PtJ4kUrWuZT3lfqLjRo91ynEq6WoldLIbuP0A6BYyL6LjIhSiIopQKURCFFCCFKhSqqbqVSiiBUKSoVUREQSiIghERAREQEREBERBCKUQEREHYMM2Yo4KGJzoGPmdSwOkc4ZszZAXPB93AegC1Ct2BrZKqVlFCZowzetu5rcrD+W7iLm/BdGoX72mpCOEuHxtH8wiaR+i9nZolr2ZuD2bp/ry++nuq5bsr50qaaSJ7o5GOjewlr2PBa5rhxBCmNui7B4xbL7yEYhE0byLyVQA1fGPlk9Rz7ei5HF8qzl4bl3Fi+qOK61sh4XQT4a6orN4J5488AaS38O137NxH5nH5rHlYLJqvBSKCKJ8le9xbd9TZjWtMY5M5g8NTfmro+0cbULYNtcLp6WrLKfOIiLhrzmykG1geJHDitfTSy7QiIiqgpKpClREKFJUKqIiIJRQiAiIgIilAREQQiIgIiICIiAiIgLIpaOSUSGNpeY253Nbq7JexcBzA5rHV+irJYJGyRPdG9vAtJGnQ9R2Qe5iuyckVJFWU8raumfGHOexpa+F3Bwc3oCLX5a3766ut7MYjFJHvY2iNkxJljb+zbPYBxy8r6XtxFjx4+BtbsWRmqKNl2/M+naNR1MfUfw/ToqxMvOq2nw6qd9hlMeJppzE7+S9/wDS8fRbnTQljnafLJmHp/2FyHwlxlsNY6kkdaKsAY250bUNvk+ty31IXb44uB5kZXfzBGbPK/VQMlDongOjnjfG4Hgbi39fuvn7Btmi/GI8OfchtS6OTvDHdzj7sb910qqlq/xr44pJC5rzlAcbN0B9tLLFwXCJodq3uI3rn0AqHOJ0YZMsZPfg4KZTaSurUkAIboAL5rcgBwH2XjbdVuWnlb1Zk93EBbIBlaPp7Bc72+qfIBfWSQuH8jdB9ytF9OIbZSk1Qb+6wfUkn/ZeCs/HKjeVUzhqM2UejdP6LDhhe92VjHPd+6xpc76BSumPiLalVyxOY4te1zHDi1wLXD1BVCjQFUqVKAVClQgIiICKUQQilEBERBKKEQQiIgIiICIiApUKUBFk4W6AVERqGF8Gdu9a1xYTHfWxGvf2XdaHC9nKyljggbRVDY2W0DG1TWnm4izwb80S3TjezGOuo5CHAvgksJWcx0e3o4fcadCOr0NU3dNkad5E4Xa5munX/heZi3hNTPJdS1UlPf8AJK3fx+zgQ4e91j4NsxjOFuI3TMQpHnzsppAZGfxtY+xv2HH7pWLqsLbDZXeg1tFfejzyRx6GQjXOy35x05+vHoOwG1bcQoQ94yzx2jn0s1zwB8Rp7ggkcj7LwnRys+LTklp1dFI10Z9HNIvG/wBR69vR2aw6FjpaljDEamzpG/LaQA8hoDx4c7rw9zvY9bD7ZTy7cXFeTwzKZkkGNTzlmamqIImXGrm1QzagDgMrACT1b3Xi7Q7TVFLiAqWUzRLuXUjXEOkY5jXGQt7uGp9ittHDXQcDx69Vo21lDJLUt0llByHR5yxhpuCSB5bZzw1sSvldX5i82Vxz8frT2fxJPXlRTeJlc7PvJiM/7O0UYiGl/KS3gQQfbuvMr9on1bpWSuG9ETmwPZbJnIsxpbbW7iBcLCr6qMExsiAa1rWRWaCGgOzOytPJzhc9dF6ezWF0U9TFNJK5roZc7YmN/aAkFg1udDrpa2vVfS4ua2+7P+1y5eKSeos7KeFEkgjlxCQwtNnfhY9Z3N4+d3Bl+mp15FdYwzC4KeMR0tPFEwaWjAYwd3O4vKy42ttc2IOtgdP8zuardPppYAcCdGj0C+lHht21jaHYDD6ydtTVGQvDMrhG7dMkHK/PTtbitB8RNjMOpaPfUjdw5jwXGaWR2+aRbKwEnW9iutVEVQ8Exx7x3J0x3cQP6/ZaTjnhjX4jLvKrFImW+SKKB8rIx2Jc2572VJXDLIuz/wDhGADzYnJftAwD6Zlz/bvZL/8AKnjjFQKlkjS5r8ojc0g2LS3Meo17qadNxrCKVCioUoiAiIgIiIClEQEREFKIiAiIglFClBClQpQFVHI5rg5rnNcNQ5pLXA9iFSiDqOw3iPHHCKevkkzB1o5ywPbu7CweW+a/HWxXRqPFopmh8UkczTwdC9rgf6r5tpIg+SNhe2MPe1pkebMjBNi4noOK7dg/h5hdM0O3tRUSEA7xs0kLTp+UREG3qSq55SNjrpA8aOyutYbxpsf9ljYaS0ZHXuLm5Itrfh21VbaGNosx1Q0f4k0v+sFW/wAHIDdsrna8HxgE+4t+i+X8p0/5HF/X3Hfr8v0y8szODqTaw/mOg1F+np1XlYzvWgyRN3jxcFoylwZ114kaX7jnovQzHIL6EixB9bc+SjOw5h5Qb/KCMoF7+wvf69l+Nx3x5eZ6fXxyljXqDZwStE04Ic6z2sIyuza8T3OXT1CmfZuFgvEXMN+LblwI421F+V+5WyMqAOFidTbW5t26LDc4MDXG3zFxf5W5nE8R/ESe9gF3w7PLct78foykrxG4rXU5NsrYQ7K0O+ISBpcHlrx7raNmdoRK8RyRgOPyvb/W61raKjBgLQ5sT3N/aamUa5tL6XtmJ9lOD7BOkYHjF69umhieG+tjlC/W/F9i8vD59x8fs8f1z8OlyVTG8SF4OLbX0UAO8qoGdnSNB+g1WtVXhTFKPiYticn+LIJB9wvKqPBOD/14lIw/3lOyT9HBfTcNRi7R+KrACykbvXf2jmlsY+upXLcTxCapmdNPIZJHcSeAHIAch2XSKvwXqxfc19LJ2kZJDf6ZlpO1Gytbhr2NqWstICWPieJI3W4jqDqOIUu25p4iIoUaEREQUoiKIiICIiAiIgpREQEUoghFKIClQiCVClEALYabbfFowAK2VwHKTK/7kXWvKqN7mua5pLXNIc0jiHA3BRNOoYaNqalrXua6GNwBD3xgPIPAhl/1stswjZrEJCBUVMljxBcwP9gy1h6laBg/inXQxBk8bawgn4kkj2PIvwNhYrqOwW1TayhdUTuggc6V8bIWOGYNaBprqXEm/wBFdbYserVYXSxxtaGnytygtcWk6duPuvIdhtXmdu93K1paDvHWeBa9rcNA4a+qp2o2miommSTzzEfChbqW9z3/AEXr7LFz6CCZ5u+piE7yOAc8A2HoLD2Xh5+h1+bxcfP+OmHPnj6rUnVmpjdeN3mJuQ0/xOdz0AOnrxVqXFICS5zXSZfOCSTlGWwBty0vx5lbtQYbSPqZWy08MhlaJhvGNfdxAD+PqD9Ur9jMMkJDqcMuQfhudGL8tBovnX4Xz4yer+Z/jndXVxSvD6h8uHwtd55xTyzskFgNS0eUG3PS1ui2/BMXwJrGRjGqWQjQFzhA49Bc2XvUz4KJtpbMhZpvn2yRt/veTR/Hw624nHx7w+wTEAXSUbIZHC+/o7QyEkfN5fK/3BX1et1seDH6x5eTk+93XrU0EJ1bVF4PD4kbhb6K7JBH/bW/zRriuP8Ah3jmE5psNqpqqmbc5YiRPG3U+aHVr+WrdewWv0vifisflfupLaHM0tdfnf8A6Xqc9fp1bb/aN2HU5kifLM85g3LTGSJhto577hobfvfXguF7Q7V1+IWFVPnY12ZkbWtZGx1raADXieN+K3Kn8XZeElCxw5lkpaT7ZVp+1+NU1dUNmgoxSHLaQBzCJXX+azWix763SrjHhIiKNiIiAiIgIiICIiCUREFClEQEREQRFKKhSoUoClQpREKUUIJWdglI6apja3NcHO4tuHNY3Um44eqwFsOz/wAGCWa5DpPhssbHKDr7HX6Bc+XL642pldRdxmpMkh/Na4vcm7l1/wAMto4ZsPjpHuEc9K3dlryAXxfkcOvIHuFwuSU5uKzDUwtAzsdKS0HMH5HMfcnym3S3uufHLhIxrTo/ijtFU0dXROpZ3Qyshc4kAOBa7KLOadCDb7La9gtuHYlRl80N5YnZJ90DYE6tcAeAI+4K4lUNjrLyur373ysIrDdwFvKM1+Gh/wDir2z+JYhg1U2pgIcPlkaDmhnj/ddb7HiF2+82vj07bj21kVJ8UtdNC0htQwNtM2B2gkaDo/KdCOhJ5KnD2SMhFVgNRFVUrvMcPmefwrjxIgefNTP/AID5ewWjbReJ2G4hBu5MPlie5kgc8FhsSwgAEam56gLnOA4/W0Em9pKh8DjbMGm8cgHJ7Do73WyR9E4d4nYa6QwVm+wqqbo+GtYWAHtIPKW9za65z43xYO409TSSQPq5nu3ppXsfHJCG/O8N0D8xaAedzxtpiy+I1FiMIgxjDo3kCzamnuHxnq0fM30BsubTtYHvDCXMDnBjiMrnMv5SRyNrIsihERRtCKUQQilLIIRLIgIpRAREQEUKUFKlERBERARSiCEUpZFFNlICrAQWlCuOCoQVQxOe9rGi7nENAHUrZMUtExkI/wDW0A9cywdmaW8rpT8sQvrzeeCt4xPdx11JXl5L9+SY/pzvm6YGe7rq/JwWIwrILtF6LGqxirsNQ5ugJt0urRRXW1VyWOo+ndUKUsqIRERRERAUoiAiALdtktiX1Dd7MC1p+VvOyluhpNlC6rjGwTBGd2zLYLmddSPhkcx4sQfqFJlsYyKQFOUrQpRXGwuPJX46F5U3E2xEXrsww9EU+8T7R46KVC00IiICkKFU1Bdjiurv4dTA5ZGcLNqsUxKlwWU5wVh6bFhypDSeAueXdXhHdbPsbgRllM7x8KLUX4Ok5D2WeTknHjcr+Gb4XWUopqNrDo4jO89yOC1CqkzPJW17YVYz7tp1/Nb9FrDYF5+rLZc8vdZxn5Y4CrVx0dlQV62ltSAiqaVVMqpKuFUOCChFNkQQilEEKQoUhB6WBxtdUMDuF13/AGeEYiYBbQL5zhlLXBw4hb9s7tnkaGvNlx5N72Ox1GQsN7LhviVAwVALbcwbLYq3bttrBy0LH8TNQ+/K91cLumnnRMV8Rdlbp1nsbotVdLcTLLNhe0LCkusZ4fyKzrbFxbPBMwjki1qKd7eqLF42PqxGsUlgRF3dU01s+ovcEK09lgDfjf7Iin5RSAilFpVTXkKvOURAzlVByIoPQw6APkYy9szmtv0ubLqOIsbR0RbE0WjZpyu7qURfO7l3ljPwzm5bVkucXONyTclUMGiIvdJqNxanWKiLcSpsoy6oiD06Oga4akq/PhrAOJRFy3duW7t5FRGAbKyURdY6IRSiqoKhEQSr0JRFKMlrAdSrboxdEWYkZtHCFlvjACIpfbpGDIdVciYCiKVzzXzTtKIixtx2/9k='
                   src = {resultIdRender[0].src.large}
                   alt=''
                />
                <div className = {style.blockDownload}>

                    <div className = {style.contenDownloadButton}>
                            
                        <div className = {style.iconDownload}>
                            <span>
                                Free Download  
                            </span>
                        </div>                    
                        
                        <button className = {style.downloadButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="0.230in" height="0.140in">
                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M3.138,0.522 L10.997,8.379 L18.958,0.417 L18.959,0.418 C19.229,0.159 19.596,-0.002 20.000,-0.002 C20.828,-0.002 21.500,0.669 21.500,1.498 C21.500,1.903 21.340,2.269 21.079,2.540 L21.080,2.540 L12.080,11.540 L12.079,11.539 C11.807,11.821 11.424,11.997 11.000,11.997 C10.999,11.997 10.998,11.997 10.997,11.997 C10.996,11.997 10.994,11.997 10.993,11.997 C10.569,11.997 10.187,11.821 9.914,11.539 L9.914,11.540 L0.913,2.540 L0.917,2.536 C0.659,2.267 0.500,1.901 0.500,1.498 C0.500,0.669 1.172,-0.002 2.000,-0.002 C2.455,-0.002 2.862,0.201 3.138,0.522 Z"></path>
                            </svg>
                        </button>
                       
                    </div>
                    <div className = {style.hoverSizeDownloadPicture}>
                        <ItemSizeDownloadPicture />
                    </div>
                </div>

            </div>

        </WrapperModal>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      items: state.getPictures.data,
     
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getPictureAction: query => dispatch(getPictures(query))
    };
  };
  
export default connect( mapStateToProps, mapDispatchToProps)(Modal);
