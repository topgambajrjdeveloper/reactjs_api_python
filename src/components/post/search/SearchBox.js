import React from "react";
import { List } from "semantic-ui-react";

export default function SearchBox() {
  return (
    <div style={{ flexDirection: "column" }}>
      <div>
        <div style={{ height:"50%" }}>
          <List style={{ height:"150%" }}>
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <div key={item}>
                  <List.Item>
                    <List.Icon name="point" size="38" />
                    <List.Content>Semantic UI</List.Content>
                  </List.Item>
                </div>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
}
