import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["title", "description", "status", ""];

const TABLE_ROWS = [
  {
    title: "reclamation1",
    description: "reclamation desc",
    status: "not_treated",
  },
  {
    title: "reclamation2 ",
    description: "reclamation222",
    status: "not_treated",
  },
];

 function Reclamations() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ title, description, status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={title}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
              
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Reclamations