import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import {CiLocationOn, CiPhone} from "react-icons/ci"
  import PropTypes from 'prop-types';

  export function AssociationCards({ data }) {
    // your code here
  
  AssociationCards.propTypes = {
    data: PropTypes.object,
  };



    if (!data) {
      return <div>Loading...</div>;
    }

    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://jamaity.org/wp-content/uploads/2015/01/%D8%AA%D9%88%D9%86%D8%B3-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9-%D9%85%D8%AF%D9%86%D9%8A%D9%86.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {data.Association_name}
          </Typography>
          <div className="flex items-center gap-3 px-8  bg-white rounded-3xl shadow-main">
                   <CiLocationOn/>
                        <p className="font-extrabold text-dark-grey-900">Location</p>
                        <p className="text-base leading-7 text-dark-grey-600">{data.Association_adress}
</p>
                      
                        </div>

                        <div className="flex items-center gap-3 px-8  bg-white rounded-3xl shadow-main">
                   <CiPhone/>
                        <p className="font-extrabold text-dark-grey-900">Phone number</p>
                        <p className="text-base leading-7 text-dark-grey-600">{data.phonenum}
</p>

                      


                        </div>
                        <hr className="pb-2"/>
                        <p>{data.Associationdescription}</p>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
    }