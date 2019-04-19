import React, { Component } from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Sync from '@material-ui/icons/Sync';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


const textAreaStyles = {
  width: 235,
  margin: 5

};
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

class MyStudents418 extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        inputNames: "",
        nameList: [],
        // { name: blah, count: 0, background: }
        count: 0
      }
    }
    // handleSubmit=() => {
    //   const nameArray = this.state.inputNames.split(',');
    //   let result = [];
    //   for( let x=0; x<nameArray.length; x++){
    //     const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    //     let record = {
    //       name: nameArray[x],
    //       count: 0,
    //       background: randColor
    //     }
    //     result.push(record);
    //   }
    //   this.setState({
    //     nameList: result,
    //     inputNames:""
    //   });
    // }
    handleSubmit=() => {
      if (this.state.nameList.length>0) {
        if (window.confirm("Are you sure? This will erase your other students! To add new students make sure to click Add Student instead")){
          const nameArray = this.state.inputNames.split(',');
          let result = [];
          for( let x=0; x<nameArray.length; x++){
            const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            let record = {
              name: nameArray[x],
              count: 0,
              background: randColor
            }
            result.push(record);
          }
          
          this.setState({
            nameList: result,
            inputNames:""
          });

        } 
        else {;}
      }
    else {     
      const nameArray = this.state.inputNames.split(',');
      let result = [];
      for( let x=0; x<nameArray.length; x++){
        const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let record = {
          name: nameArray[x],
          count: 0,
          background: randColor
        }
        result.push(record);
      }
      
      this.setState({
        nameList: result,
        inputNames:""
      });

    }}
    handleNewStu= () => {
      const newNameArray = this.state.inputNames.split(',');
      let temp = JSON.parse(JSON.stringify(this.state.nameList));

      for( let x=0; x<newNameArray.length; x++){
        const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        let record = {
          name: newNameArray[x],
          count: 0,
          background: randColor

        }
        temp.push(record);
      }
      this.setState({
        nameList: temp,
        inputNames: ""
      });
    }
    handleChange=(e) =>{
      this.setState({
        inputNames: e.target.value
      });
    }
    handleAdd = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].count = temp[index].count + 1;
      
      this.setState({
        nameList: temp,
        count: this.state.count + 1
      })
    }
    handleSub = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].count = temp[index].count - 1;
      this.setState({
        nameList: temp,
        count: this.state.count - 1
      })
    }
    handleReset = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].count = 0;
      this.setState({
        nameList: temp
        //count: 0
      })
    }
    handleDelete = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].name = 0;
      temp.splice(index,1);
      this.setState({
        nameList: temp
        //count: 0
      })
    }
    onDragStart = (e, index) => {
      this.draggedItem = this.state.nameList[index];
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };
    onDragOver = index => {
      const draggedOverItem = this.state.nameList[index];
                      // if the item is dragged over itself, ignore
      if (this.draggedItem === draggedOverItem) {
        return;
      }
      // filter out the currently dragged item
      let nameList = this.state.nameList.filter(item => item !== this.draggedItem);
      // add the dragged item after the dragged over item
      nameList.splice(index, 0, this.draggedItem);

      this.setState({ nameList });
    };
    onDragEnd = () => {
      this.draggedIdx = null;
    };
    FormRow = (x) => {
    
      return (
        <React.Fragment>
          <Grid item xs={2}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>item</Paper>
          </Grid>
        </React.Fragment>
      );
    }


    render(){
      const names = this.state.nameList.map((record, index) => {
        //randomColor = 
        var myStyle = {
          color: 'black',
          fontSize: '20px',
          backgroundColor:record.background }
        return (
          <div style={myStyle} className="drag" draggable="true" 
              onDragStart={e => this.onDragStart(e, index)}
              onDragEnd={this.onDragEnd} 
              onDragOver={() => this.onDragOver(index)}>
            <div>{record.name}</div><Badge color="primary" badgeContent={record.count}></Badge><br />
                            <button onClick={() => {this.handleAdd(index);}}>+</button>
                            <button onClick={() => {this.handleSub(index);}}>-</button>
                            <button onClick={() => {this.handleReset(index);}}>Reset</button>
                            <button onClick={() => {this.handleDelete(index);}}>Delete</button>
          </div>
        )
      });
  return (
        <div> 
          <textarea 
            onChange ={this.handleChange}
            value={this.state.inputNames}
            style ={textAreaStyles}
            placeholder="Separate names with Commas"/><br />
          <button onClick={this.handleSubmit}>Create List</button>
          <button onClick={this.handleNewStu}>Add Student</button>
          <h1>My Class List:</h1>
          <ul>
            {names}
          </ul>
          <button className='inc' onClick={this.increment}>+</button>
          <button className='dec' onClick={this.decrement}>-</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Total Class Points: {this.state.count}</h1>
        <Grid container spacing={8}>
            <Grid container item md={20} spacing={24}>
              {this.FormRow(this.props)}
            </Grid>
            <Grid container item md={20} spacing={24}>
            </Grid>
            <Grid container item md={20} spacing={24}>
            </Grid>
          </Grid>
        </div>
      );
      
    }
  };

class MyStudents extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        inputNames: "",
        nameList: [],
        // { name: blah, count: 0, background: }
        count: 0,
        randName: ""
      }
    }
    // handleSubmit=() => {
    //   const nameArray = this.state.inputNames.split(',');
    //   let result = [];
    //   for( let x=0; x<nameArray.length; x++){
    //     const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    //     let record = {
    //       name: nameArray[x],
    //       count: 0,
    //       background: randColor
    //     }
    //     result.push(record);
    //   }
    //   this.setState({
    //     nameList: result,
    //     inputNames:""
    //   });
    // }
    handleSubmit=() => {
      if (this.state.nameList.length>0) {
        if (window.confirm("Are you sure? This will erase your other students! To add new students make sure to click Add Student instead")){
          const nameArray = this.state.inputNames.split(',');
          //let temp = JSON.parse(JSON.stringify(this.state.nameList));
          let result = [];
          for( let x=0; x<nameArray.length; x++){
            const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            let record = {
              name: capitalizeFirstLetter(nameArray[x]),
              count: 0,
              background: randColor
            }
            result.push(record);
          }
          
          this.setState({
            nameList: result,
            inputNames:""
          });

        } 
        else {;}
      }
    else {     
      const nameArray = this.state.inputNames.split(',');
      //let temp = JSON.parse(JSON.stringify(this.state.nameList));

      let result = [];
      for( let x=0; x<nameArray.length; x++){
        const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let record = {
          name: capitalizeFirstLetter(nameArray[x]),
          count: 0,
          background: randColor
        }
        result.push(record);
      }
      
      this.setState({
        nameList: result,
        inputNames:""
      });

    }}
    handleNewStu= () => {
      const newNameArray = this.state.inputNames.split(',');
      let temp = JSON.parse(JSON.stringify(this.state.nameList));

      for( let x=0; x<newNameArray.length; x++){
        const randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let record = {
          name: capitalizeFirstLetter(newNameArray[x]),
          count: 0,
          background: randColor

        }
        temp.push(record);
      }
      this.setState({
        nameList: temp,
        inputNames: ""
      });
    }
    handleChange=(e) =>{
      this.setState({
        inputNames: e.target.value
      });
    }
    handleAdd = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].count = temp[index].count + 1;
      
      this.setState({
        nameList: temp,
        count: this.state.count + 1
      })
    }
    handleSub = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].count = temp[index].count - 1;
      this.setState({
        nameList: temp,
        count: this.state.count - 1
      })
    }
    handleReset = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].count = 0;
      this.setState({
        nameList: temp
        //count: 0
      })
    }
    handleDelete = (index) => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      temp[index].name = 0;
      temp.splice(index,1);
      this.setState({
        nameList: temp
        //count: 0
      })
    }
    handleRandom = () => {
      let temp = JSON.parse(JSON.stringify(this.state.nameList));
      let random = temp[Math.floor(Math.random()*temp.length)];
      let randomName = random.name;
      var myStyle = {
        color: 'black',
        fontSize: '20px',
        backgroundColor:random.background }
      var randomNameList = <div style={myStyle}><React.Fragment>
      <Grid item xs={2}>
        <Paper>{randomName}</Paper>
      </Grid>
    </React.Fragment></div>

    
      this.setState({
        randName: randomNameList
        //count: 0
      })

    };
    onDragStart = (e, index) => {
      this.draggedItem = this.state.nameList[index];
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };
    onDragOver = index => {
      const draggedOverItem = this.state.nameList[index];
                      // if the item is dragged over itself, ignore
      if (this.draggedItem === draggedOverItem) {
        return;
      }
      // filter out the currently dragged item
      let nameList = this.state.nameList.filter(item => item !== this.draggedItem);
      // add the dragged item after the dragged over item
      nameList.splice(index, 0, this.draggedItem);

      this.setState({ nameList });
    };
    onDragEnd = () => {
      this.draggedIdx = null;
    };
    FormRow = (names) => {
      var i;
      var nameList = []
      for(i = 0; i <names.length; i++){
        nameList.push(<React.Fragment>
          <Grid item xs={2}>
            <Paper>{names[i]}</Paper>
          </Grid>
        </React.Fragment>)
      };
      return(nameList)
    }

    render(){
      const { classes } = this.props;
      const names = this.state.nameList.map((record, index) => {
        //randomColor = 
        var myStyle = {
          color: 'black',
          fontSize: '20px',
          backgroundColor:record.background }
        return (
          <div style={myStyle} className="drag" draggable="true" 
              onDragStart={e => this.onDragStart(e, index)}
              onDragEnd={this.onDragEnd} 
              onDragOver={() => this.onDragOver(index)}>
            <div>{capitalizeFirstLetter(record.name)}</div><Badge color="primary" badgeContent={record.count}></Badge><br />
                            {/* <button onClick={() => {this.handleAdd(index);}}>+</button> */}
                            <IconButton onClick={() => {this.handleAdd(index);}}>
                              <ThumbUp/>
                            </IconButton>
                            {/* <ThumbUp onClick={() => {this.handleAdd(index);}}>+</ThumbUp> */}

                            {/* <button onClick={() => {this.handleSub(index);}}>-</button> */}
                            <IconButton onClick={() => {this.handleSub(index);}}>
                              <ThumbDown/>
                            </IconButton>

                            {/* <button onClick={() => {this.handleReset(index);}}>Reset</button> */}
                            <IconButton onClick={() => {this.handleReset(index);}}>
                            <Sync/>
                            </IconButton>

                            {/* <button onClick={() => {this.handleDelete(index);}}><Delete/></button> */}
                            <IconButton onClick={() => {this.handleDelete(index);}}>
                            <Delete/>
                            </IconButton>
          </div>
        )
      });
  return (
        <div> 
                <AppBar position="static">
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                  My Class List
                </Typography>
                
                <SearchIcon />
            
            <InputBase
              placeholder="Search…"
            />
                
                
                </AppBar>

          <textarea onChange ={this.handleChange}
                    value={this.state.inputNames}
                    style ={textAreaStyles}
                    placeholder="Separate names with Commas"/><br />
          <button onClick={this.handleSubmit}>Create List</button>
          <button onClick={this.handleNewStu}>Add Student</button>
            <h1>My Class List:</h1>
              <ul>
                {/* {names} */}
              </ul>
            <h1>Total Class Points: {this.state.count}</h1>
        <Grid container spacing={8}>
            <Grid container item md={20} spacing={24}>
              {this.FormRow(names)}
            </Grid>
        </Grid>
        <button onClick={this.handleRandom}>Select Random Student:</button>
        {/* <Grid container spacing={8}>
        <Grid container item md={20} spacing={24}>
              {this.FormRow(this.state.randName)}
            </Grid>
        </Grid> */}
        <ul>{this.state.randName}</ul>
        </div>
      );
      
    }
  };
export default withStyles(styles)(MyStudents)



// <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   confirm("Press a button!");
// }
// </script>

// <Confirm>
//   {confirm => (
//     <form onSubmit= {confirm(handleSubmit)}>
  
//     </form> //or
//     <button onClick= {confirm(launch)}>Launch!</button>
// )} </Confirm>

// function ImageGridList(props) {
//   const { classes } = props;
//   const myArray = ['hello','you','are','lame']
//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {myArray.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
           
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

// ImageGridList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// return (
//   <React.Fragment>
//     <Grid item xs={2}>
//       <Paper>item</Paper>
//     </Grid>
//     <Grid item xs={2}>
//       <Paper>item</Paper>
//     </Grid>
//     <Grid item xs={2}>
//       <Paper>item</Paper>
//     </Grid>
//   </React.Fragment>
// );