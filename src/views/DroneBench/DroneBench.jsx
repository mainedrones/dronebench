import React from "react";
import { withStyles, Grid } from "material-ui";

import {
  RegularCard,
  ItemGrid,
  Table
} from "components";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  }
};
function DroneBenchPage({ ...props }) {
  return (
        <div>
          <Grid container>
            <ItemGrid xs={12} sm={6} md={3}>
            <RegularCard
              headerColor="orange"
              cardTitle="Missions Planned"
              cardSubtitle="Drone Missions Planed"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Tail", "Location", "Model", "Task"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              }
            />
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
              ItemGrid
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
              ItemGrid
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
              ItemGrid
            </ItemGrid>
            <ItemGrid xs={12} sm={6} md={3}>
          
            </ItemGrid>
          </Grid>
        </div>
  );
}


export default withStyles(style)(DroneBenchPage);
