import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    View,
    Text,
    Button,
    StatusBar,    
    ScrollView,
    SafeAreaView,
    ActivityIndicator
} from 'react-native'

import { getTransatcions } from '../../actions'

import styles from './styles/home'

class Home extends Component {

    state = {
        transactions: []
    }

    componentDidMount() {
        this.props.getTransatcions()
    }
   
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                
                    <Button
                        title="Get Latest Transactions"
                        onPress={this.props.getTransatcions}
                    />
                    {this.props.isFetching && <ActivityIndicator size="large" color="#0000ff" />}                    
                    <ScrollView
                        style={styles.scrollView}
                        contentInsetAdjustmentBehavior="automatic"                
                    >
                        <View style={styles.body}>      
                            {this.props.transactions.items && this.props.transactions.items.map(each => (
                            <>  
                                <View style={styles.internalContainer} key={each.merchantId}>
                                    <View style={styles.internalRowWrapper}>
                                        <View style={styles.internalRowWrapperFirstColumn}>
                                            <Text style={styles.internalTextLabel}>{'Provider'}</Text>    
                                        </View>
                                        <View>
                                            <Text>{each.provider}</Text>    
                                        </View>                                        
                                    </View>                                    
                                    <View style={styles.internalRowWrapper}>
                                        <View style={styles.internalRowWrapperFirstColumn}>
                                            <Text style={styles.internalTextLabel}>{'Currency'}</Text>    
                                        </View>
                                        <View>
                                            <Text>{each.currency}</Text>    
                                        </View>                                        
                                    </View>                                    
                                    <View style={styles.internalRowWrapper}>
                                        <View style={styles.internalRowWrapperFirstColumn}>
                                            <Text style={styles.internalTextLabel}>{'Amount'}</Text>    
                                        </View>
                                        <View>
                                            <Text>{each.amount}</Text>    
                                        </View>                                        
                                    </View> 
                                    <View style={styles.internalRowWrapper}>
                                        <View style={styles.internalRowWrapperFirstColumn}>
                                            <Text style={styles.internalTextLabel}>{'State'}</Text>    
                                        </View>
                                        <View>
                                            <Text>{each.state}</Text>    
                                        </View>                                        
                                    </View>
                                    <View style={styles.internalRowWrapper}>
                                        <View style={styles.internalRowWrapperFirstColumn}>
                                            <Text style={styles.internalTextLabel}>{'Created At'}</Text>    
                                        </View>
                                        <View>
                                            <Text>{each.created}</Text>    
                                        </View>                                        
                                    </View>
                                    <View style={styles.internalRowWrapper}>
                                        <View style={styles.internalRowWrapperFirstColumn}>
                                            <Text style={styles.internalTextLabel}>{'Can refund ?'}</Text>    
                                        </View>
                                        <View>
                                            <Text>{each.canRefundIfConfirmed ? 'Yes' : 'No'}</Text>    
                                        </View>                                        
                                    </View>
                                </View>                                  
                                
                            </>)
                            )}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>  
        )
    }   
}

function mapStateToProps(state) {
    return {
        isFetching: state.isFetching,
        transactions: state.transactions
    }
}
  
export default connect(mapStateToProps, { getTransatcions })(Home)