import { Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import "./App.css";
import CustomAppBar from "./components/CustomAppBar";
import GridItem from "./components/GridItem";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";
import CustomerReviewImg from "./assets/CustomerReviews.png";
import PriceRangeImg from "./assets/PriceRange.png";
import SortBy from "./components/SortBy";
import Related from "./components/Related";
import axios from "axios";

export type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  inStock: number; // or boolean if 1 represents true and 0 false
  image: string;
  review: number;
  discount: number;
  description: string;
  shipping_cost: number;
  shipping_method: string;
  shipping_estimatedDelivery: string;
};

export type ProductArray = Product[];

function App() {
  const [currentData, setCurrentData] = useState<ProductArray>([]);
  const [sortOption, setSortOption] = useState("");
  const [initialData, setInitialData] = useState<ProductArray>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<ProductArray>(
        "http://localhost:3001/products"
      );
      setCurrentData(response.data);
      setInitialData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let sortedData = [...currentData];
    switch (sortOption) {
      case "asc":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "rate":
        sortedData.sort((a, b) => b.review - a.review);
        break;
      default:
    }
    setCurrentData(sortedData);
  }, [currentData, sortOption]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "88px",
          alignItems: "center",
          mb: 6.5,
        }}
      >
        <CustomAppBar setCurrentData={setCurrentData} initialData={initialData} />
      </Box>
      <Grid container spacing={3} justifyContent="center" flexWrap="nowrap">
        <Grid
          item
          direction="column"
          xs="auto"
          sx={{
            py: 3,
            mt: 19.5,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              Price Range Selected
            </Typography>
            <Box>
              <img src={PriceRangeImg} />
            </Box>
            <img src={CustomerReviewImg} style={{ marginTop: 50 }} />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              boxShadow:
                "0px 2px 4px 0px rgba(90, 91, 106, 0.24), 0px 1px 2px 0px rgba(58, 58, 68, 0.24)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderRadius: "4px",
              p: 2,
              ml: "auto",
              maxWidth: "1114px",
            }}
          >
            <Stack
              sx={{ height: "36px" }}
              direction="row-reverse"
              justifyContent={"space-between"}
            >
              <Tabs sx={{}}>
                <Tab
                  sx={{
                    width: "68px",
                    m: 0,
                    color: "#2264D1",
                    backgroundColor: "#fff",
                    boxShadow:
                      "0px 2px 4px 0px rgba(41, 121, 255, 0.24), 0px 1px 2px 0px rgba(27, 78, 163, 0.24)",
                    minHeight: "unset",
                    minWidth: "unset",
                    height: "36px",
                    padding: 0,
                    textTransform: "none",
                    borderRadius: "4px",
                  }}
                  icon=<ViewListSharpIcon sx={{ width: "18px" }} />
                />
                <Tab
                  sx={{
                    width: "68px",
                    m: 0,
                    color: "#5A5B6A",
                    backgroundColor: "#EBF2FF",
                    minHeight: "unset",
                    minWidth: "unset",
                    height: "36px",
                    padding: 0,
                    textTransform: "none",
                    borderRadius: "4px",
                  }}
                  icon=<GridViewSharpIcon sx={{ width: "18px" }} />
                />
              </Tabs>
              <SortBy setSortOption={setSortOption} />
            </Stack>
            <Related />
            <Grid container rowSpacing={5}>
              {currentData.map((d) => (
                <GridItem
                  id={d.id}
                  img={d.image}
                  description={d.description}
                  price={d.price}
                  rate={d.review}
                  ShippingCost={d.shipping_cost}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
