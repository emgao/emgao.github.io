import React from 'react'

 function Writing () {

    const list = [
        {
        id: '1',
        title: 'Elite Serfdom Opportunity for Best-In-Class Peasant Farmers',
        outlet: 'Slackjaw',
        link: null,
        },
        {
        id: '2',
        title: 'Learning To Cook (And Express Your Despair) During Quarantine',
        outlet: 'The Belladonna',
        link: null,
        },
    ];
       
    const List = ({ list }) => (
        <div>
        {list.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
        </div>
    );
   
  const ListItem = ({ item }) => (
      <div>
      <p><a href={ item.link }>{item.title}</a> ({item.outlet})</p>
      </div>
  );

    return (
    <div className="page-content">
        <h4>Writing</h4>
        <List list={list} />
        </div>
         )
     }

export default Writing