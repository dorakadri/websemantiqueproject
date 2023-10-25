import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import {CiLocationOn, CiPhone} from "react-icons/ci"
  export function AssociationCards() {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://www.terre-asile-tunisie.org/images/Logos_associations_accompagn%C3%A9es_-_PAAIP/ATEDE.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
          ASSOCIATION TUNISIENNE DE L’EDUCATION ET DES DROITS DE L’ENFANT 
          </Typography>
          <div className="flex items-center gap-3 px-8  bg-white rounded-3xl shadow-main">
                   <CiLocationOn/>
                        <p className="font-extrabold text-dark-grey-900">Location</p>
                        <p className="text-base leading-7 text-dark-grey-600">18 Rue Egypte, 1002
</p>
                      
                        </div>

                        <div className="flex items-center gap-3 px-8  bg-white rounded-3xl shadow-main">
                   <CiPhone/>
                        <p className="font-extrabold text-dark-grey-900">Phone number</p>
                        <p className="text-base leading-7 text-dark-grey-600">22345435
</p>
                      
                        </div>
                        <hr className="pb-2"/>
                        <p>Association tunisienne de défense des droits de lenfant, créée en novembre 2011, a pour objectif la protection et la défense des droits de l'enfant et la fourniture d'une assistance directe ou indirecte à l'enfant malheureux ou en danger.

</p>
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