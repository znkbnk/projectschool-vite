var e=[`
//App.js

import  React  from "react";
import Dashboard from "./Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles.css'

import Support from "./Support";
import TransactionPage from "./Transaction";

import "./styles.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

`,`
//CustomCard.js

import { chakra } from "@chakra-ui/react";

export const CustomCard = chakra("div", {
  baseStyle: { bg: "white", borderRadius: "xl", p: "6" },
});

`,`
//DashboardLayout.js

import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;

`,`
//SideDrawer.js

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";

  import Sidenav from "./Sidenav";

  const SideDrawer = ({ isOpen, onClose }) => {
    return (
      <>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              <Sidenav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default SideDrawer;
  
`,`
//Sidenav.js

import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg='white'
      justify='space-between'
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h='100vh'
    >
      <Box>
        <Heading textAlign='center' fontSize='20px' as='h1' pt='3.5rem'>
          <Link to='https://www.projectschool.dev' target='_blank'>
            @projectschool
          </Link>
        </Heading>
        <Box mt='6' mx='3'>
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius='10px'
                py='3'
                px='4'
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize='14px' fontWeight='medium'>
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt='6' mx='3' mb='6'>
        <Link to='/support'>
          <HStack
            borderRadius='10px'
            py='3'
            px='4'
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize='14px' fontWeight='medium'>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;

`,`
//TopNav.js

import {
    Box,   
    HStack,
    Heading,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";

  import { FaBars, FaUserTie } from "react-icons/fa";
  const TopNav = ({ title, onOpen }) => {
    return (
      <Box px="4" bg="white">
        <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
          <Icon
            as={FaBars}
            onClick={onOpen}
            display={{
              base: "block",
              lg: "none",
            }}
          />
          <Heading fontWeight="medium" fontSize="28px">
            {title}
          </Heading>
  
          <Menu>
            <MenuButton>
              <Icon as={FaUserTie} fontSize="24px" />
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    );
  };
  
  export default TopNav;
  
`,`
//InfoCard.js

import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "./CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;

`,`
//PortfolioSection.js

import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            £ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                £ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">GBP</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;

`,`
//PriceSection.js

import {
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import { CustomCard } from "./CustomCard";
  import { BsArrowUpRight } from "react-icons/bs";
  import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
  
  const PriceSection = () => {
    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  
    return (
      <CustomCard>
        <Flex justify="space-between" align="start">
          <Stack>
            <HStack color="black.80">
              <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack
              spacing={2}
              align={{
                base: "flex-start",
                sm: "center",
              }}
              flexDir={{
                base: "column",
                sm: "row",
              }}
            >
              <HStack>
                <Text textStyle="h2" fontWeight="medium">
                  22.39401000
                </Text>{" "}
                <HStack fontWeight="medium" color="green.500">
                  <Icon as={BsArrowUpRight} />
                  <Text fontSize="sm" fontWeight="medium">
                    22%
                  </Text>
                </HStack>{" "}
              </HStack>
            </HStack>
          </Stack>
          <HStack>
            <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
            <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
          </HStack>
        </Flex>
        <Tabs variant="soft-rounded">
          <Flex justify="end">
            <TabList bg="black.5" p="3px">
              {["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab
                  _selected={{ bg: "white" }}
                  key={tab}
                  fontSize="sm"
                  p="6px"
                  borderRadius="4"
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
          </Flex>
          <TabPanels>
            <TabPanel>
              <Image w="100%" src="../public/img/graph.svg" mt="3rem" />
              <HStack justify="space-between">
                {timestamps.map((timestamp) => (
                  <Text key={timestamp} fontSize="sm" color="black.80">
                    {timestamp}
                  </Text>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CustomCard>
    );
  };
  
  export default PriceSection;
  
`,`
//Transactions.js

import {
    Button,
    Divider,
    Flex,
    Grid,
    Icon,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { CustomCard } from "./CustomCard";
  import { BsCurrencyRupee } from "react-icons/bs";
  import { FaBtc } from "react-icons/fa";
  import { Fragment } from "react";
  
  const Transactions = () => {
    const transactions = [
      {
        id: "1",
        icon: BsCurrencyRupee,
        text: "GBP Deposit",
        amount: "+ £81,123.10",
        timestamp: "2022-06-09 7:06 PM",
      },
      {
        id: "2",
        icon: FaBtc,
        text: "BTC  Sell",
        amount: "- 12.48513391 BTC",
        timestamp: "2022-06-09 7:06 PM",
      },
      {
        id: "3",
        icon: BsCurrencyRupee,
        text: "GBP Deposit",
        amount: "+ £81,123.10",
        timestamp: "2022-06-09 7:06 PM",
      },
    ];
  
    return (
      <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="black.80">
          Recent Transactions
        </Text>
        <Stack spacing={4}>
          {transactions.map((transaction, i) => (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider />}
              <Flex gap="4">
                <Grid
                  placeItems="center"
                  bg="black.5"
                  boxSize={10}
                  borderRadius="full"
                >
                  <Icon as={transaction.icon} />
                </Grid>
                <Flex justify="space-between" w="full">
                  <Stack spacing={0}>
                    <Text textStyle="h6">{transaction.text}</Text>
                    <Text fontSize="sm" color="black.40">
                      {transaction.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{transaction.amount}</Text>
                </Flex>
              </Flex>
            </Fragment>
          ))}
        </Stack>
        <Button w="full" mt="6" colorScheme="gray">
          View All
        </Button>
      </CustomCard>
    );
  };
  
  export default Transactions;
  
`,`
//Dashboard.js

import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "./DashboardLayout";
import PortfolioSection from "./PortfolioSection";
import PriceSection from "./PriceSection";
import Transactions from "./Transactions";
import InfoCard from "./InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans - Keep your Bitcoin, access it's value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="../public/img/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;

`,`
//ContactCard.js

import {
    Card,
    Checkbox,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Box,
    Stack,
    Text,
    Textarea,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  
  const ContactCard = () => {
    return (
      <Card p="6" borderRadius="1rem">
        <Stack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
          </Text>
  
          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter Your Name.." />
            </FormControl>
            <FormControl>
              <FormLabel>Surename</FormLabel>
              <Input placeholder="Enter Your Surename.." />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter Your Email.." />
          </FormControl>
          <FormControl>
            <FormLabel>Messagee</FormLabel>
            <Textarea placeholder="Enter Your Message.." />
          </FormControl>
          <Checkbox defaultChecked>
            <Text fontSize="xs">
              I agree with
              <Box as="span" color="p.purple">
                {" "}
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize="sm">Send a Message</Button>
            <Button fontSize="sm" colorScheme="gray">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
    );
  };
  
  export default ContactCard;
  
`,`
//SupportCard.js

import {
    Box,
    Flex,
    Icon,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";

  const SupportCard = ({ leftComponent, icon, title, text }) => {
    return (
      <Flex
        gap={6}
        justify="space-between"
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack maxW="24rem">
          <Icon as={icon} boxSize={6} color="p.purple" />
          <Text fontWeight="medium" as="h1" textStyle="h1">
            {title}
          </Text>
          <Text fontSize="sm" color="black.60">
            {text}
          </Text>
        </Stack>
        <Box maxW="550px" w="full">
          {leftComponent}
        </Box>
      </Flex>
    );
  };
  
  export default SupportCard;
  
`,`
//Support.js

import { IoMdMail } from "react-icons/io";
import DashboardLayout from "./DashboardLayout";
import ContactCard from "./ContactCard";
import SupportCard from "./SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "./InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don't have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;

`,`
//TransactionTable.js

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    Text,
    Tag,
  } from "@chakra-ui/react";

  const TransactionTable = () => {
    const tableData = [
      {
        id: "HD82NA2H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "GBP Deposit",
          tag: "E-Transfer",
        },
        amount: "+£81,123",
        status: "pending",
      },
      {
        id: "HD82NA4H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "GBP Widthdraw",
          tag: "Wire Transfer",
        },
        amount: "-£55,123",
        status: "processing",
      },
      {
        id: "HD82NA5H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Buy",
          tag: "BTC",
        },
        amount: "12.0554484 BTC",
        status: "cancelled",
      },
      {
        id: "HD82NA6H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "Sell",
          tag: "BTC",
        },
        amount: "-2.0554484 BTC",
        status: "completed",
      },
      {
        id: "HD82NA7H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "BTC Deposit",
        },
        amount: "+15.5000000",
        status: "pending",
      },
      {
        id: "HD82NA8H",
        date: "2023-06-18",
        time: "07:00 AM",
        type: {
          name: "BTC Widthdraw",
        },
        amount: "-5.05555544",
        status: "completed",
      },
    ];
  
    const statusColor = {
      pending: "#797E82",
      processing: "#F5A50B",
      completed: "#059669",
      cancelled: "#DC2626",
    };
  
    return (
      <TableContainer>
        <Table variant="simple" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody color="p.black">
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td fontSize="sm" fontWeight="medium">
                  {data.id}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">
                      {data.date}
                    </Text>
                    <Text fontSize="xs" color="black.60">
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  {" "}
                  <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">
                      {data.type.name}
                    </Text>
                    <Text fontSize="xs" color="black.60">
                      {data.type?.tag}
                    </Text>
                  </Stack>
                </Td>
                <Td fontSize="sm" fontWeight="medium">
                  {data.amount}
                </Td>
                <Td fontSize="sm" fontWeight="medium">
                  <Tag
                    bg={statusColor[data.status]}
                    color="white"
                    borderRadius="full"
                  >
                    {data.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default TransactionTable;
  
`,`
//Transaction.js

import {
    Button,
    Card,
    Flex,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Tag,
  } from "@chakra-ui/react";
  import DashboardLayout from "./DashboardLayout";
  import { AiOutlineDownload } from "react-icons/ai";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
  import TransactionTable from "./TransactionTable";
  import { BsSearch } from "react-icons/bs";

  const TransactionPage = () => {
    const tabs = [
      {
        name: "All",
        count: 349,
      },
      {
        name: "Deposit",
        count: 114,
      },
      {
        name: "Widthdraw",
        count: 55,
      },
      {
        name: "Trade",
        count: 50,
      },
    ];
  
    return (
      <DashboardLayout title="Transactions">
        <Flex justify="end" mt="6" mb="3">
          <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
        </Flex>
        <Card borderRadius="1rem">
          <Tabs>
            <TabList
              pt="4"
              display="flex"
              w="full"
              justifyContent="space-between"
            >
              <HStack>
                {tabs.map((tab) => (
                  <Tab key={tab.name} display="flex" gap="2" pb="4">
                    {tab.name}{" "}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tab.count}
                    </Tag>
                  </Tab>
                ))}
              </HStack>
  
              <InputGroup maxW="200px" pr="6">
                <InputLeftElement pointerEvents="none">
                  <Icon as={BsSearch} />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>
            </TabList>
  
            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    );
  };
  
  export default TransactionPage;
  
`,`
//theme.js

import { ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },
    fonts: {
      heading: \`Ubuntu\`,
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "30px",
          md: "32px",
        },
        color: "p.black",
        lineHeight: {
          base: "34px",
          md: "36px",
        },
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.black",
        lineHeight: { base: "28px", md: "32px" },
      },

      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
          xl: "32px",
        },
        color: "p.black",

        lineHeight: { base: "26px", md: "28px", xl: "36px" },
      },

      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.black",

        lineHeight: { base: "24px", md: "26px" },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",

        lineHeight: { base: "22px", md: "24px" },
      },
      h6: {
        fontSize: {
          base: "16px",
          md: "18px",
        },
        color: "p.black",

        lineHeight: { base: "20px", md: "22px" },
      },
    },

    fontSizes: {
      xs: "12px",
      sm: "14px",
      base: { base: "16px", md: "18px" },
      lg: { base: "18px", md: "20px" },
      xl: { base: "20px", md: "22px" },
      "2xl": { base: "22px", md: "24px" },
      "3xl": { base: "24px", md: "28px" },
      "4xl": { base: "30px", md: "32px" },
    },
    styles: {
      global: {
        // styles for the \`body\`
        body: {
          bg: "#F3F3F7",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
              pb: "0",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",

            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);

`,`
//index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { theme } from "./theme.js";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

`];export{e as default};
//# sourceMappingURL=TradeHub-React-Trading-Dashboard-DAFZTYjK.js.map