import React, { useEffect } from "react";
import NavBar from "./../NavBar/navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategories } from "./../../redux/actions";
import { deleteElement } from "../../redux/actions";
import { Button, Grid, List, ListItem, Paper } from "@mui/material";
import { AddCardOutlined, DeleteOutlined } from "@mui/icons-material";

export default function Categorias() {
  const dispatch = useDispatch();

  const categorias = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteElement("categories", id));
  }

  const stylePaper = {
    border: "1px solid gray",
    padding: 20,
    height: "auto",
    width: 800,
    margin: "20px auto",
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <NavBar />
      <Grid>
        <h2 style={{ width: "100%", textAlign: "center", color: "gray" }}>
          Administrar Categorias
        </h2>
        <Paper style={stylePaper}>
          <Link
            to="/categoria/add"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCardOutlined />}
              disableElevation
            >
              Agregar Categoria
            </Button>
          </Link>
          <List sx={{ width: "100%" }}>
            {categorias?.map((c, i) => {
              return (
                <ListItem
                  key={c.id}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <h2>{`${i + 1}.- ${c.nombre}`}</h2>
                  <Button
                    startIcon={<DeleteOutlined />}
                    size="small"
                    variant="text"
                    color="secondary"
                    title="Eliminar categoria"
                    onClick={(e) => handleDelete(e, c.id)}
                  ></Button>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </div>
  );
}
