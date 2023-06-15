import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import useDataFetching from '../hooks/useDataFetching';
import NavBar from '../components/NavBar';
import ListItem from '../components/ListItem/ListItem';

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;


const ListDetail=() =>{
  let navigate = useNavigate();
  const { listId } = useParams();

  const listItemsURL = `https://my-json-server.typicode.com/sabinamp/shoppinglist/lists/${listId}`;
  const [loading, error, data] = useDataFetching(listItemsURL);

  const [items, setItems] = useState([]);
  

  useEffect(() => {
    data &&  listId && setItems(data.items);
  }, [data, listId]);

  return (
    <>
      {navigate && (
        <NavBar
          goBack={() => navigate(-1)}
          openForm={() => navigate(`/list/${listId}/new`)}
        />
      )}
      <ListWrapper>
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          items.map((item) => <ListItem key={item.id} item={item} />)
        )}
      </ListWrapper>
    </>
  );
}

export default ListDetail;