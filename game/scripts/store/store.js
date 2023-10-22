import Vuex from 'vuex'
import axios from 'axios'

import * as Wager from './wager'

export const MUTATIONS = {
    SET_SESSION: 'SET_SESSION',
    SET_LAST_BOARD: 'SET_LAST_BOARD',
    SET_BALANCE: 'SET_BALANCE',
    SET_ROUND_RESULTS: 'SET_ROUND_RESULTS',
    SET_WALLET: 'SET_WALLET',
    SET_ROLLOVER: 'SET_ROLLOVER',
    SET_TXN_PENDING: 'SET_TXN_PENDING',
    SET_LOADING_TEXT: 'SET_LOADING_TEXT',
}

export const ACTIONS = {
    CONNECT: 'CONNECT',
    PLAY: 'PLAY',
    WITHDRAW: 'WITHDRAW',
    FETCH_SESSION_DATA: 'FETCH_SESSION_DATA',
}


const store = new Vuex.Store({
    state: () => ({
        session: null,
        roundResults: null,
        txnPending: false,
        loadingText: 'Loading...'
    }),

    mutations: {
        [MUTATIONS.SET_SESSION]: (state, session) => {
            state.session = { ...session }
        },
        [MUTATIONS.SET_BALANCE]: (state, balance) => {
            state.session.balance = balance
        },
        [MUTATIONS.SET_ROUND_RESULTS]: (state, roundResults) => {
            state.roundResults = { ...roundResults }
        },
        [MUTATIONS.SET_WALLET]: (state, wallet) => {
            state.wallet = wallet
        },
        [MUTATIONS.SET_ROLLOVER]: (state, rollover) => {
            state.session.rollover = rollover
        },
        [MUTATIONS.SET_TXN_PENDING]: (state, txnPending) => {
            state.txnPending = txnPending
        },
        [MUTATIONS.SET_LOADING_TEXT]: (state, loadingText) => {
            state.loadingText = loadingText
        },
    },

    actions: {
        [ACTIONS.CONNECT]: ({ commit }) => {
            return new Promise((resolve, reject) => {
                const { walletAddress } = window
                if (walletAddress === undefined) {
                    alert('No Wallet found - contact devs')
                    reject()
                } else {
                    commit(MUTATIONS.SET_WALLET, walletAddress)
                    const requestConfig = {
                        url: `/hatchscratcher/connect/${walletAddress}`,
                        baseURL: import.meta.env.VITE_API_URL,
                        method: 'POST',
                        withCredentials: true
                    }
                    axios(requestConfig)
                        .then(response => {
                            commit(MUTATIONS.SET_SESSION, response.data)
                            resolve()
                        })
                        .catch(reject)
                }
            })
        },
        [ACTIONS.FETCH_SESSION_DATA]: ({ commit }) => {
            return new Promise((resolve, reject) => {
                const requestConfig = {
                    url: '/hatchscratcher/session',
                    baseURL: import.meta.env.VITE_API_URL,
                    method: 'GET',
                    withCredentials: true
                }
                axios(requestConfig)
                    .then(response => commit(MUTATIONS.SET_SESSION, response.data))
                    .then(() => resolve())
                    .catch(reject)
            })
        },
        [ACTIONS.PLAY]: ({ commit, state }) => {
            return new Promise((resolve, reject) => {
                const requestConfig = {
                    baseURL: import.meta.env.VITE_API_URL,
                    url: '/hatchscratcher/session/play',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        bet: state.wager.wager,
                        board: state.wager.guessBoard
                    }
                }
                axios(requestConfig)
                    .then(response => {
                        const { results, user } = response.data
                        commit(MUTATIONS.SET_ROUND_RESULTS, results)
                        commit(MUTATIONS.SET_BALANCE, user.balance)
                        commit(MUTATIONS.SET_ROLLOVER, user.rollover)
                        resolve()
                    })
                    .catch(reject)
            })
        },
        [ACTIONS.WITHDRAW]: ({ dispatch, commit, state }) => {
            return new Promise((resolve, reject) => {
                const requestConfig = {
                    baseURL: import.meta.env.VITE_API_URL,
                    url: '/hatchscratcher/session/withdraw',
                    method: 'POST',
                    withCredentials: true,
                }
                axios(requestConfig)
                    .then(response => {
                        // console.log(response)
                        const { hash } = response.data
                        alert("Transaction Hash: " + hash)
                    })
                    .then(() => dispatch(ACTIONS.FETCH_SESSION_DATA))
                    .then(() => resolve())
                    .catch(reject)
            })
        },
    },

    modules: {
        [Wager.NAMESPACE]: Wager.MODULE
    },
})

export default store
