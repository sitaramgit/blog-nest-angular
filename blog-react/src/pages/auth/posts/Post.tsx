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
import { memo, useEffect, useState, useRef, useMemo } from "react";
import { Box } from "@mui/material";
import { API_REQUESTS } from "../../../common/apiRequests";
import { httpService } from "../../../services/httpService";
import { useParams } from "react-router-dom";
import JoditEditor from 'jodit-react';
import { updateUrlParams } from "../../../common/commonFunctions";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Post = () => {
  const { postId } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [post, setPost] = useState<any>({});
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
        readonly: true, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: 'Start typings...',
        width: '500'
    }),
    []
);
  useEffect(() => {
    // getPosts();
    if(postId){
        getPost()
    }
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getPost = async () => {
    API_REQUESTS.GET_POST_DETAILS.URL = updateUrlParams(API_REQUESTS.GET_POST_DETAILS.URL, { postId: postId });
    try {
      const res = await httpService(API_REQUESTS.GET_POST_DETAILS);
      setPost(res);
    } catch (error) {}
  };

  return (
    <Box margin={"auto"}>
      <Typography>Posts</Typography>
      
        <Box marginTop={'10px'}>
          <Card>
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
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {/* {post.description} */}
              <JoditEditor
			ref={editor}
			value={post.description}
			config={config}
			onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => {}}
		/>
            </Typography>
          </CardContent>
        </Card>
        </Box>
    </Box>
  );
};
export default memo(Post);
