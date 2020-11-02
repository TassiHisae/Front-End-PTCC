import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Back from "./components/Back";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Andamento from "./pages/Order/Andamento";
import Finalizado from "./pages/Order/Finalizado";
import Settings from "./pages/Profile";
import Lojas from "./pages/Alimentos/Lojas";
import Itens from "./pages/Alimentos/Itens";
import PetShopAcessorios from "./pages/Petshop/Acessorios";
import PetShopAlimentos from "./pages/Petshop/Alimentos";
import PetShopSaude from "./pages/Petshop/Saude";

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          Alimentos: {
            screen: createStackNavigator({
              Alimentos: {
                screen: createMaterialTopTabNavigator(
                  {
                    Lojas,
                    Itens,
                  },
                  {
                    navigationOptions: ({ navigation }) => ({
                      title: "ALIMENTOS",
                      headerTitleAlign: "center",
                      headerTitleStyle: {
                        color: "#333",
                        fontSize: 17,
                      },
                      headerLeft: () => (
                        <Back
                          onPress={() => navigation.navigate("Home")}
                          color="#2dc7ff"
                        />
                      ),
                      headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        shadowOffset: { height: 0, width: 0 },
                      },
                    }),
                    tabBarOptions: {
                      labelStyle: {
                        color: "#000",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      },
                      style: {
                        fontSize: 12,
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        shadowOffset: { height: 0, width: 0 },
                        backgroundColor: "#FFF",
                      },
                      indicatorStyle: {
                        backgroundColor: "#f76abc",
                      },
                    },
                    style: {
                      backgroundColor: "#FFF",
                    },
                  }
                ),
              },
            }),
          },
          PetShop: {
            screen: createStackNavigator({
              PetShop: {
                screen: createMaterialTopTabNavigator(
                  {
                    PetShopAcessorios,
                    PetShopAlimentos,
                    PetShopSaude,
                  },
                  {
                    navigationOptions: ({ navigation }) => ({
                      headerTitleAlign: "center",
                      headerTitleStyle: {
                        color: "#333",
                        fontSize: 17,
                      },
                      headerLeft: () => (
                        <Back
                          onPress={() => navigation.navigate("Home")}
                          color="#2dc7ff"
                        />
                      ),
                      headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        shadowOffset: { height: 0, width: 0 },
                      },
                    }),
                    tabBarOptions: {
                      labelStyle: {
                        color: "#000",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      },
                      style: {
                        fontSize: 12,
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        shadowOffset: { height: 0, width: 0 },
                        backgroundColor: "#FFF",
                      },
                      indicatorStyle: {
                        backgroundColor: "#f76abc",
                      },
                    },
                    style: {
                      backgroundColor: "#FFF",
                    },
                  }
                ),
              },
            }),
          },
        }),

        App: createBottomTabNavigator(
          {
            Home,
            Search,
            Pedidos: {
              screen: createStackNavigator(
                {
                  Pedidos: {
                    screen: createMaterialTopTabNavigator(
                      {
                        Andamento,
                        Finalizado,
                      },
                      {
                        navigationOptions: {
                          title: "PEDIDOS",
                          headerTitleAlign: "center",
                          headerTitleStyle: {
                            color: "#333",
                            fontSize: 17,
                          },
                          headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            shadowRadius: 0,
                            shadowOffset: { height: 0, width: 0 },
                          },
                        },
                        tabBarOptions: {
                          labelStyle: {
                            color: "#000",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                          },
                          style: {
                            fontSize: 12,
                            elevation: 0,
                            shadowOpacity: 0,
                            shadowRadius: 0,
                            shadowOffset: { height: 0, width: 0 },
                            backgroundColor: "#FFF",
                          },
                          indicatorStyle: {
                            backgroundColor: "#f76abc",
                          },
                        },
                        style: {
                          backgroundColor: "#FFF",
                        },
                      }
                    ),
                  },
                },
                {
                  navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="box" size={25} color={tintColor} />
                    ),
                  },
                }
              ),
            },
            Settings,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: "#000",
              inactiveTintColor: "rgba(0,0,0,0.6)",
              style: {
                backgroundColor: "#fefefe",
                borderTopColor: "#2dc7ff",
                borderTopWidth: 2,
                paddingTop: 4,
              },
            },
          }
        ),
      },

      { initialRouteName: "App" }
    )
  );
