"use client";

import { UnsplashImage } from "@/models/unsplash-image";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import Image from "next/image";
import styles from "./SearchPage.module.css";
import { Alert } from "react-bootstrap";
export default function SearchPage() {
  const [searchResults, setsearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultLoading, setsearchResultsLoading] = useState(false);
  const [searchResultLoadingIsError, setsearchResultsLoadingIsError] =
    useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();
    if (query) {
      try {
        setsearchResults(null);
        setsearchResultsLoadingIsError(false);
        setsearchResultsLoading(true);
        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await response.json();
        setsearchResults(images);
      } catch (error) {
        console.error(error);
        setsearchResultsLoadingIsError(true);
      } finally {
        setsearchResultsLoading(false);
      }
    }
  }
  return (
    <div>
      <Alert>
        This page fetches data <strong> client-side</strong>
        in order to not leak api credentials, th request is send to a next js
        route handler that run on the server. this route handler then fetches
        the data from the Unsplash API and return it to the client
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>search query</Form.Label>
          <Form.Control name="query" placeholder="e.g cats" />
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={searchResultLoading}>
          Button
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-center">
        {searchResultLoading && <Spinner animation="border" />}
        {searchResultLoadingIsError && (
          <p>something went wrong please try again</p>
        )}
        {searchResults?.length === 0 && (
          <p>Nothing found .try with a diffrent query!</p>
        )}
      </div>
      <div>
        {searchResults && (
          <>
            {searchResults.map((image) => (
              <Image
                src={image.urls.raw}
                width={250}
                height={250}
                alt={image.description}
                key={image.urls.raw}
                className={styles.image}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
