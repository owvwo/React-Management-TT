import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender': '남자',
  'job' : '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '야야야',
    'birthday' : '921222',
    'gender': '남자',
    'job' : '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '나야야',
    'birthday' : '9211222',
    'gender': '남자',
    'job' : '대학생'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              birthday = {c.birthday}
              name = {c.name}
              gender = {c.gender}
              job = {c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
