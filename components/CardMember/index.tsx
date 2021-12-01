// Mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  username: string;
  avatar: string;
};

const MemberCard = (props: Props) => {
  const { username, avatar } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt={`${username}'s avatar`}
          sx={{ height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Placeholder for bio, skills, badges, socials, etc?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemberCard;
