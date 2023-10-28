import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Tooltip,Avatar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"
import { useState, useEffect } from 'react';
import axios from 'axios';
  export function Cardpost({prop}) {
    const isTaken = prop.taken && prop?.taken?.startsWith('true');

    return (
      <Card className="w-full max-w-[26rem] shadow-lg">
   
      <CardHeader floated={false} color="blue-gray">
        <img
          src={prop.image}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isTaken? 'currentColor' : 'transparent'}
              className="-mt-0.5 h-5 w-5 text-blue-700 "
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {prop.title}
          </Typography>
 
        </div>
        <Typography color="gray">
    
        {prop.description}
        </Typography>
        <Typography color="gray">
    
        {prop.date}
    </Typography>
   
      </CardBody>
      <CardFooter className="pt-3 flex gap-1">
        <Button size="lg" fullWidth={true}>
          Exchange
        </Button>
        <Button size="lg" fullWidth={true}>
        <Link to={`/post/${prop.id}`}>Show details</Link>
       
        </Button>
      </CardFooter>

    </Card>
    
    );
  }