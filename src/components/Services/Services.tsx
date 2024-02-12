import React from "react";
import { Container, ContentContainer, Hamburger } from "./ServicesStyle";
import { MobileSidebar, Sidebar } from "../Sidebar/Sidebar";

const Services: React.FC<{ content: any }> = ({ content }) => {
  const sidebar = content?.map((item: any) => item?.sidebar);
  const [activeItemId, setActiveItemId] = React.useState(0);
  const [activeItem, setActiveItem] = React.useState(content[0]);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const setActiveItemHandler = (id: number) => {
    setActiveItemId(id);
    setIsSidebarOpen(false);
  };

  React.useEffect(() => {
    setActiveItem(content[activeItemId]);
  }, [activeItemId, content]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <Container img={activeItem.background}>
      <Sidebar list={sidebar} setActiveItemHandler={setActiveItemHandler} />
      <ContentContainer>
        <h1>{activeItem?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: activeItem?.text }}></div>
      </ContentContainer>
      <Hamburger onClick={toggleSidebar} />

      {isSidebarOpen && (
        <MobileSidebar
          list={sidebar}
          setActiveItemHandler={setActiveItemHandler}
          toggleSidebar={toggleSidebar}
        />
      )}
    </Container>
  );
};

export default Services;
