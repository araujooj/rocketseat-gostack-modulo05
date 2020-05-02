import React, { Component, useState, useEffect, useCallback } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';
import api from '../../services/api';

export default function Main() {
    const [error, setError] = useState(false);
    const [errorDesc, setErrorDesc] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newRepo, setNewRepo] = useState("");

    useEffect(() => {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({
                repositories: JSON.parse(repositories),
            });
        }
    }, [repositories])

    const handleChange = useCallback((e) => {
        setNewRepo(e.target.value)
    }, [newRepo]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setLoading(true)

        const newRepoFormatted = newRepo.toLowerCase()
        
    }, [loading])

    const errorScreen = () => {
        if (error) {
            return <h3>{errorDesc}</h3>;
        }
    }

    /*
      componentDidMount() {
        const repositories = localStorage.getItem('repositories');
    
        if (repositories) {
          this.setState({
            repositories: JSON.parse(repositories),
          });
        }
      }
    
      componentDidUpdate(_, prevState) {
        const { repositories } = this.state;
    
        if (prevState.repositories !== repositories) {
          localStorage.setItem('repositories', JSON.stringify(repositories));
        }
      }
    
      handleChange = e => {
        this.setState({
          newRepo: e.target.value,
        });
      };
    
      handleSubmit = async e => {
        const { newRepo, repositories } = this.state;
        e.preventDefault();
    
        this.setState({
          loading: true,
        });
    
        // Transformando em lower case para impedir que a pessoa utilize letras maiusculas para burlar a verificação
        const newRepoFormatted = newRepo.toLowerCase()
    
        try {
          const response = await api.get(`/repos/${newRepoFormatted}`);
    
          const data = {
            name: response.data.full_name,
          };
    
          const hasRepo = repositories.find(r => r.name === newRepoFormatted);
    
          if (hasRepo) {
            this.setState({
              errorDesc: 'Repositório Duplicado',
              loading: false,
              error: true,
              newRepo: '',
            });
          } else {
            this.setState({
              repositories: [...repositories, data],
              newRepo: '',
              loading: false,
              error: false,
            });
          }
        } catch (error) {
          this.setState({
            error: true,
            loading: false,
            newRepo: '',
            errorDesc: 'Repositório Inexistente',
          });
        }
      };
    
      // eslint-disable-next-line consistent-return
        */
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
        </h1>
            {errorScreen}
            <Form onSubmit={handleSubmit} error={error}>
                <input
                    onChange={handleChange}
                    value={newRepo}
                    type="text"
                    placeholder="Adicionar repositórios"
                />
                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                            <FaPlus size={14} color="#fff" />
                        )}
                </SubmitButton>
            </Form>
            <List>
                {repositories.map(repository => (
                    <li key={repository.name}>
                        <span>{repository.name}</span>
                        <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                            {' '}
                            Detalhes{' '}
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    );
}
