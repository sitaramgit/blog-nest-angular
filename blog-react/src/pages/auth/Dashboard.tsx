import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { memo, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { httpService } from "../../services/httpService";
import { API_REQUESTS } from "../../common/apiRequests";
import { useNavigate } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPosts();
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getPosts = async () => {
    try {
      const res = await httpService(API_REQUESTS.GET_ALL_POSTS);
      console.log(res);
      setPosts(res);
    } catch (error) {}
  };

  return (
    <Box margin={"auto"}>
      <Typography>Posts</Typography>
      {posts?.map((post: any) => 
        <Box marginTop={'10px'} onClick={() => {navigate(`/post/${post.id}`)}} >
          <Card >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post?.title}
            subheader={post?.created_at}
          />
          <CardMedia
            component="img"
            height="194"
            image={post?.imgUrl}
            alt="Paella dish"
          />
        </Card>
        </Box>
      )}
    </Box>
  );
};
export default memo(Dashboard);
