import type { NextPage } from "next";
import propTypes from "prop-types";

// components
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Typography,
} from "@mui/material";

const ServiceCard: NextPage<{
  title?: string;
  titleCaption?: string;
  content?: string;
  action?: any;
  classname?: string;
  imageUrl?: string;
}> = ({ title, titleCaption, content, action, classname, imageUrl }) => (
  <Card className={`mt-20 rounded-lg ${classname}`}>
    <Container>
      <CardContent className="my-5 text-center">
        <div className="flex justify-center">
          <CardMedia
            component="img"
            image={imageUrl}
            sx={{ width: "50%", height: "50%" }}
          />
        </div>
        <Typography
          className="mt-3"
          variant="h5"
          fontWeight="bolder"
          component="div"
        >
          {title}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          {titleCaption}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions className="mb-3 flex justify-center">{action}</CardActions>
    </Container>
  </Card>
);

ServiceCard.propTypes = {
  title: propTypes.string,
  titleCaption: propTypes.string,
  content: propTypes.string,
  imageUrl: propTypes.string,
  action: propTypes.element,
  classname: propTypes.string,
};

ServiceCard.defaultProps = {
  title: "",
  titleCaption: "",
  content: "",
  classname: "",
  imageUrl: "",
  action: <div />,
};

export default ServiceCard;
