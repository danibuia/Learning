import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getPosts } from "../../../redux/actions/posts/getPosts";
import { useDispatch, useSelector } from "react-redux";
import TablePagination from "@mui/material/TablePagination";

const PostCard = (props) => {
  const { setPostIdProps } = props;
  const dispatch = useDispatch();
  const postsFromRedux = useSelector((state) => state.postReducer?.posts);

  const [posts, setPosts] = useState([]);
  const [accessToken, setAccessToken] = useState();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 // eslint-disable-next-line
 function a(postTitle, postAuthor, postSubtitle, postDescription) {
    return {
      postTitle, 
      postAuthor,
      postSubtitle,
      postDescription,
    };
  }

  useEffect(() => {
    setPosts(postsFromRedux);
    console.log("postsFromRedux: ", postsFromRedux);
  }, [postsFromRedux]);

  const getPostsWithToken = () => {
    accessToken ? dispatch(getPosts(accessToken)) : setPosts([]);
  };

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
    getPostsWithToken();
    // eslint-disable-next-line
  }, [accessToken]);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={posts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" >index</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Subtitle</TableCell>
              <TableCell align="right">Likes</TableCell>
              <TableCell align="right">Id</TableCell>
            
              
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow
                row={posts ? posts : []}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">{post.postTitle}</TableCell>
                <TableCell align="right">{post.postAuthor}</TableCell>
                <TableCell align="right">{post.postSubtitle}</TableCell>
                <TableCell align="right">{post.likes}</TableCell>
                <TableCell onCellClick={(details, event) => { event.target.checked === true ? setPostIdProps(details.row._id) : setPostIdProps('') }} align="right">{post._id}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
  );
};
export default PostCard;
