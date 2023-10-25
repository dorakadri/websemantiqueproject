import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
 
export function DonationsCard() {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Title
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
        Description  Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
        <br />
        <Typography color="blue-gray" className="font-medium" textGradient>
          État : ..
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Disponibilite : ..
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
       
       <Typography variant="h6" color="blue-gray" className="font-large">Catégorie</Typography>
        
        
        
      </CardFooter>
    </Card>
    
  );
}
