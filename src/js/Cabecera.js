import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const styles = StyleSheet.create({
  cabecera: {
    padding: 5,
    fontSize: 22,
    textAlign:'center',
    marginBottom: 20
      },
 });

var Cabecera = React.createClass({
    render: function() {
        return (
            <Text style={styles.cabecera}>
                {this.props.texto}
            </Text>
        );
    }
});



module.exports = Cabecera;
